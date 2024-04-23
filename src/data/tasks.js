const data = [
  {
    id: 1,
    title: "E-commerce Website Development",
    description:
      "Build a responsive e-commerce website with features like product catalog, user authentication, and secure payment gateway integration.",
    tags: ["Web", "E-commerce", "Frontend", "Backend"],
    priority: "High",
  },
  {
    id: 2,
    title: "Cloud Migration Strategy",
    description:
      "Devise a strategy for migrating on-premises applications to a cloud platform, considering scalability, security, and cost-effectiveness.",
    tags: ["Cloud", "Migration", "Strategy"],
    priority: "Medium",
  },
  {
    id: 3,
    title: "Mobile App Security Assessment",
    description:
      "Perform a security assessment on a mobile application, identifying and mitigating vulnerabilities to ensure a robust and secure mobile app.",
    tags: ["Mobile", "Security", "Assessment"],
    priority: "High",
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description:
      "Develop a data analytics dashboard that visualizes key performance indicators (KPIs) and provides actionable insights for business decision-making.",
    tags: ["Data Analytics", "Dashboard", "Visualization"],
    priority: "High",
  },
];

function getAllTasks() {
  return data;
}

export { getAllTasks };
