const getFormateDate = (value, type, inMS) => {
    if (!type) return value;
    if (!inMS) {
      value = value * 1000;
    }
    const date = new Date(value);
    let options;
    if (type === "date") {
      options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
    }
    if (type === "time") {
      options = {
        hour: "numeric",
        minute: "numeric",
      };
    }
    return Intl.DateTimeFormat("en-US", options).format(date);
  };
  export { getFormateDate };
  