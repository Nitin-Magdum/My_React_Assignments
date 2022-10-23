const results = () => {
  const studentsList = [
    {
      name: "Nitin",
      subjects: [
        { subject: "Grammer", marks: 80 },
        { subject: "Accounts", marks: 79 },
      ],
    },
    {
      name: "Naina",
      subjects: [
        { subject: "Grammer", marks: 45 },
        { subject: "Accounts", marks: 98 },
      ],
    },
    {
      name: "Sanket",
      subjects: [
        { subject: "Grammer", marks: 100 },
        { subject: "Accounts", marks: 79 },
      ],
    },
    {
      name: "Poorva",
      subjects: [
        { subject: "Grammer", marks: 60 },
        { subject: "Accounts", marks: 69 },
      ],
    },
    {
      name: "Akash",
      subjects: [
        { subject: "Grammer", marks: 28 },
        { subject: "Accounts", marks: 53 },
      ],
    },
    {
      name: "Namrata",
      subjects: [
        { subject: "Grammer", marks: 35 },
        { subject: "Accounts", marks: 44 },
      ],
    },
    {
      name: "Ratnesh",
      subjects: [
        { subject: "Grammer", marks: 69 },
        { subject: "Accounts", marks: 90 },
      ],
    },
    {
      name: "Snehal",
      subjects: [
        { subject: "Grammer", marks: 43 },
        { subject: "Accounts", marks: 90 },
      ],
    },
  ];
  const result = () =>
    studentsList.reduce((obj, item) => {
      let percenRes = item.subjects.reduce(() => {
        return (
          (item.subjects[0].marks + item.subjects[1].marks) /
          item.subjects.length
        );
      }, {});
      console.log({ name: item.name, percentage: percenRes });
    }, {});
  const finResult = result(studentsList);
  return finResult;
};
results();
