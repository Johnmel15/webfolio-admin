import moment from "moment";

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export const formatDate = (isoDate: string) => {
  return moment(isoDate).format("MMM DD, YYYY, hh:mm A");
};

export const formatRelativeDate = (isoDate: string) => {
  return moment(isoDate).fromNow();
};