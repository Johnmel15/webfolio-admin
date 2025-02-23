import { FC, useState, useEffect, useRef } from "react";
import { ModalProps } from "../../../types/modal";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import { IconType } from "react-icons";
import { SketchPicker } from "react-color";
import debounce from "lodash.debounce";
import { useTechStackMutation } from "../../../hooks/mutations";
// import { showToast } from "../../../components/ui/Toast";
import { useQueryClient } from "@tanstack/react-query";
import { useGetOneTechStackQuery } from "../../../hooks/queries";

const allIcons = {
  ...FaIcons,
  ...AiIcons,
  ...RiIcons,
  ...BiIcons,
  ...SiIcons,
} as Record<string, IconType>;

const allIconsList = Object.keys(allIcons);

const FormModal: FC<ModalProps> = ({ setIsModalOpen, id, setId }) => {
  const cache = useQueryClient();
  const { createTechStack, updateTechStack } = useTechStackMutation();
  const { dataOneTechStack, loadingOneTechStack } = useGetOneTechStackQuery(
    id ? id : ""
  );

  console.log(dataOneTechStack);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredIcons, setFilteredIcons] = useState<string[]>([]);
  const [isFetchingIcons, setIsFetchingIcons] = useState<boolean>(false);
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    icon: "",
    name: "",
    category: "",
    icon_color: "",
  });

  const SelectedIcon = allIcons[formData.icon as keyof typeof allIcons];

  // Close color picker when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setShowColorPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Debounce search to improve performance
  useEffect(() => {
    const debouncedSearch = debounce((term) => {
      setIsFetchingIcons(true);
      if (term?.trim() === "") {
        setFilteredIcons([]);
        return;
      }
      const results = allIconsList
        .filter((icon) => icon?.toLowerCase().includes(term?.toLowerCase()))
        .slice(0, 50); // Limit results for performance
      setFilteredIcons(results);
      setIsFetchingIcons(false);
    }, 300);

    debouncedSearch(searchTerm);

    return () => debouncedSearch.cancel();
  }, [searchTerm]);

  useEffect(() => {
    if (!loadingOneTechStack && id) {
      setSearchTerm(dataOneTechStack?.icon);
      setFormData({
        icon: dataOneTechStack?.icon,
        name: dataOneTechStack?.name,
        category: dataOneTechStack?.category,
        icon_color: dataOneTechStack?.icon_color,
      });
    }
  }, [id, loadingOneTechStack, dataOneTechStack]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let response: any = {};

    if (id) {
      response = await updateTechStack({ ...formData, id: id });
    } else {
      response = await createTechStack(formData);
    }

    if (response.code === 200) {
      // showToast(response.message, "success");
      setId?.("");
      setIsModalOpen(false);
      cache.invalidateQueries({ queryKey: ["tech_stack_list"] });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Icon Selector */}
      <div className="relative">
        <label className="block text-left text-[12px] font-medium text-gray-700">
          Select Icon
        </label>
        <div className="flex items-center border border-gray-300 rounded-md gap-2 px-2 py-1 mt-1">
          {SelectedIcon && <SelectedIcon className="w-5 h-5" />}
          <input
            type="text"
            className="w-full border-none outlin text-[12px] e-none p-2"
            placeholder="Search Icon"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsDropdownOpen(true);
            }}
            onFocus={() => setIsDropdownOpen(true)}
          />
        </div>
        {isDropdownOpen && searchTerm && (
          <div className="absolute z-10 bg-white border rounded-md shadow-lg mt-1 w-full max-h-40 overflow-y-auto">
            {filteredIcons.length > 0 ? (
              filteredIcons.map((icon) => (
                <div
                  key={icon}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setFormData({ ...formData, icon });
                    setSearchTerm(icon);
                    setIsDropdownOpen(false);
                  }}
                >
                  {allIcons[icon as keyof typeof allIcons]?.({
                    className: "w-5 h-5",
                  })}
                  <span>{icon}</span>
                </div>
              ))
            ) : (
              <>
                {isFetchingIcons ? (
                  <div className="p-2 text-gray-500 text-center">
                    Fetching Icons...
                  </div>
                ) : (
                  <div className="p-2 text-gray-500 text-center">
                    No results found
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Name Field */}
      <div>
        <label className="block text-left text-[12px] font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 text-[12px] mt-1 focus:ring-purple-500 focus:border-purple-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      {/* Category Field */}
      <div>
        <label className="block text-left text-[12px] font-medium text-gray-700">
          Category
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md text-[12px] p-2 mt-1 focus:ring-purple-500 focus:border-purple-500"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />
      </div>

      {/* Color Picker Component */}
      {showColorPicker && (
        <div
          ref={colorPickerRef}
          className="absolute flex justify-center top-2 right-2"
        >
          <SketchPicker
            color={`#${formData.icon_color}`}
            onChange={(updatedColor) => {
              setFormData({
                ...formData,
                icon_color: updatedColor.hex.replace("#", ""),
              });
            }}
          />
        </div>
      )}

      {/* Color Picker */}
      <div>
        <label className="block text-left text-[12px] font-medium text-gray-700">
          Icon Color
        </label>
        <div className="flex items-center border border-gray-300 rounded-md gap-2 px-2 py-1 mt-1">
          <input
            type="text"
            className="w-full border-none outline-none text-[12px] p-2"
            value={formData.icon_color ? `#${formData.icon_color}` : ""}
            onChange={(e) => {
              const newColor = e.target.value.replace("#", "").trim();
              setFormData({ ...formData, icon_color: newColor });
            }}
            onFocus={() => setShowColorPicker(true)}
          />

          <div
            style={{
              backgroundColor: formData.icon_color
                ? `#${formData.icon_color}`
                : "transparent",
            }}
            onClick={() => setShowColorPicker(true)}
            className="h-5 w-7 cursor-pointer border border-black"
          />
        </div>
      </div>
      <hr />
      {/* Submit Button */}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="w-fit text-[12px] font-semibold px-4 bg-red-400 text-white py-2 rounded-md hover:bg-red-500 transition"
          onClick={() => {
            setIsModalOpen(false);
            setId?.("");
          }}
        >
          Close
        </button>
        <button
          type="submit"
          className="w-fit text-[12px] font-semibold px-4 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormModal;
