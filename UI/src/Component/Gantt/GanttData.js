const scales = [
    { unit: "month", step: 1, format: "MMMM yyy" },
    { unit: "day", step: 1, format: "d" }
  ];
  
  const columns = [
    { name: "text", label: "Task name", width: "100%" },
    { name: "start", label: "Start time", align: "center" },
    { name: "duration", label: "Duration", width: "70px", align: "center" },
    { name: "add-task", label: "", width: "50px", align: "center" }
  ];
  

  export { scales, columns };
  