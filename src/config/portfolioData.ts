import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "", // update if you have a custom domain
    pdf: "./YokendraKumarP_DevopsEngineer.pdf",
  },
  personal: {
  name: "Yokendra Kumar P",
  title: "DevOps Engineer",
  headline: "DevOps · Kubernetes · AWS · DigitalOcean · CI/CD · IaC",
  avatar: "./pro4.jpeg",
  summary:
    "DevOps Engineer with hands-on experience automating, deploying, monitoring, and optimizing mission-critical applications across AWS and DigitalOcean. Strong expertise in Kubernetes, CI/CD pipelines, Infrastructure as Code, and cloud-native security. Passionate about building scalable, secure, and observable systems that improve reliability and developer experience.",
  contact: {
    email: "yokendrakumar1999@gmail.com",
    phone: "+91 6380044854",
    location: "Bengaluru, India",
    website: "https://yokendrakumar.github.io", // update if needed
    socials: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/yokendrakumar-p/",
        icon: "SiLinkedin",
      },
      {
        label: "GitHub",
        url: "https://github.com/Yokendrakumar1999",
        icon: "SiGithub",
      },
      {
        label: "DockerHub",
        url: "https://hub.docker.com/u/yokendrakumar",
        icon: "SiDocker",
      },
      {
        label: "Medium",
        url: "https://medium.com/@yokendrakumar1999",
        icon: "SiMedium",
      },
    ],
  },
},

     highlights: [
  "DevOps Engineer at TrudoSYS (Apr 2025 – Present)",
  "Hands-on with Kubernetes (EKS & DOKS), Helm, Terraform",
  "Built CI/CD pipelines with Jenkins, Git & Bitbucket",
  "AWS & DigitalOcean multi-cloud experience",
],


projects: [

  {
    id: "aws-eks-microservices",
    title: "Multi-Microservice Deployment on AWS EKS",
    description:
      "Deployed multiple Spring Boot microservices on AWS EKS with MySQL, Keycloak, Redis, RabbitMQ, API Gateway, CI/CD pipelines, and monitoring using Prometheus & Grafana.",
    tags: [
      "AWS",
      "EKS",
      "Spring Boot",
      "Helm",
      "RDS",
      "Redis",
      "RabbitMQ",
      "Keycloak",
      "Prometheus",
      "Grafana",
      "CI/CD",
    ],
    links: [],
   image: "./project-1.png",
      href: "https://www.learn-algo.com",
    isUnderDevelopment: true,
  },
  {
    id: "doks-springboot-react",
    title: "DigitalOcean DOKS Multi-Microservice Deployment (Spring Boot & React)",
    description:
      "Deployed Spring Boot microservices and React frontend on DigitalOcean Kubernetes (DOKS) with PostgreSQL, Redis, Vault, Kong API Gateway, CI/CD pipelines, and monitoring using Prometheus & Grafana.",
    tags: [
      "DigitalOcean",
      "DOKS",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Redis",
      "Vault",
      "Kong",
      "Prometheus",
      "Grafana",
      "CI/CD",
    ],
    links: [],
   image: "./project-2.png",
        href: "https://www.learn-algo.com",
    isUnderDevelopment: true,
  },


{
  id: "terraform-multi-env",
  title: "Terraform Multi-Environment Infrastructure (Dev / Stage / QA / Prod)",
  description:
    "Provisioned and managed infrastructure using Terraform across multiple isolated environments (dev, stage, QA, prod) with reusable modules, remote state management, environment-specific variables, and automated deployments.",
  tags: [
    "Terraform",
    "Infrastructure as Code",
    "DevOps",
    "Multi-Environment",
    "Remote State",
    "Terraform Modules",
    "CI/CD",
  ],
  links: [],
  image: "./project-3.png", // optional
  href: "",
  isUnderDevelopment: false,
},

],

skills : [
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Docker", level: 85, icon: "SiDocker", category: "devops", years: 2 },
      { name: "Kubernetes", level: 80, icon: "SiKubernetes", category: "devops", years: 2 },
      { name: "Helm", level: 78, icon: "SiHelm", category: "devops", years: 2 },
      { name: "Jenkins", level: 80, icon: "SiJenkins", category: "devops", years: 2 },
      { name: "Git", level: 85, icon: "SiGit", category: "devops", years: 3 },
      { name: "Bitbucket Pipelines", level: 75, icon: "SiBitbucketpipelines", category: "devops", years: 1 },
      { name: "SonarQube", level: 75, icon: "SiSonarqube", category: "devops", years: 1 },
    ],
  },
  {
    title: "Infrastructure & Cloud",
    skills: [
      { name: "AWS", level: 80, icon: "SiAmazonaws", category: "cloud", years: 2 },
      { name: "DigitalOcean", level: 80, icon: "SiDigitalocean", category: "cloud", years: 2 },
      { name: "Terraform", level: 78, icon: "SiTerraform", category: "iac", years: 2 },
      { name: "Ansible", level: 70, icon: "SiAnsible", category: "iac", years: 1 },
      { name: "VPC & Networking", level: 75, icon: "SiAmazonvpc", category: "cloud", years: 2 },
    ],
  },
  {
    title: "Monitoring & Security",
    skills: [
      { name: "Prometheus", level: 75, icon: "SiPrometheus", category: "observability", years: 1 },
      { name: "Grafana", level: 75, icon: "SiGrafana", category: "observability", years: 1 },
      { name: "CloudWatch", level: 70, icon: "SiAmazoncloudwatch", category: "observability", years: 1 },
      { name: "Vault", level: 70, icon: "SiVault", category: "security", years: 1 },
      { name: "Keycloak", level: 70, icon: "SiKeycloak", category: "security", years: 1 },
      { name: "Kong API Gateway", level: 70, icon: "SiKong", category: "security", years: 1 },
    ],
  },
  {
    title: "Programming & Datastores",
    skills: [
      { name: "Java", level: 70, icon: "SiJava", category: "backend", years: 2 },
      { name: "Bash", level: 75, icon: "SiGnubash", category: "scripting", years: 2 },
      { name: "SQL", level: 70, icon: "SiMysql", category: "database", years: 2 },
      { name: "Redis", level: 70, icon: "SiRedis", category: "database", years: 1 },
      { name: "RabbitMQ", level: 70, icon: "SiRabbitmq", category: "messaging", years: 1 },
    ],
  },
],

  experience: [
  {
    id: "trudosys-devops-2025",
    title: "DevOps Engineer",
    company: "TrudoSYS",
    location: "Bengaluru, India",
    date: { start: "2025-04", present: true },
    summary:
      "Automating, deploying, monitoring, and optimizing cloud-native applications across AWS and DigitalOcean environments with a strong focus on reliability, security, and scalability.",
    bullets: [
      "Designed and maintained CI/CD pipelines using Jenkins, Git, and Bitbucket for zero-downtime deployments.",
      "Managed Kubernetes clusters (EKS and DOKS) and Helm-based deployments for microservices.",
      "Implemented monitoring and alerting using Prometheus and Grafana.",
      "Configured Vault, Keycloak, and Kong API Gateway for secure authentication, authorization, and API management.",
      "Handled cloud networking, load balancing, and hybrid deployments across AWS and DigitalOcean.",
    ],
    tech: [
      "AWS",
      "DigitalOcean",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Helm",
      "Jenkins",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    id: "trudosys-devops-intern-2024",
    title: "DevOps Engineer Intern",
    company: "TrudoSYS",
    location: "Bengaluru, India",
    date: { start: "2024-10", end: "2025-03" },
    summary:
      "Worked on cloud infrastructure automation and CI/CD pipelines for Kubernetes-based applications.",
    bullets: [
      "Deployed three-tier applications on AWS using EKS, RDS, and Application Load Balancers.",
      "Built Jenkins pipelines to automate build, test, and deployment processes, reducing deployment time by 60%.",
      "Containerized applications using Docker and improved scalability with Kubernetes.",
      "Monitored system performance using CloudWatch and Prometheus.",
    ],
    tech: [
      "AWS",
      "EKS",
      "Docker",
      "Jenkins",
      "CloudWatch",
      "Prometheus",
    ],
  },
],

 education: [
  {
    degree: "MSc in Computer Science",
    school: "Sacred Heart College (Autonomous), Tirupattur",
    date: "2021-2023",
  
  },
  {
    degree: "BSc in Computer Science",
    school: "Puratchi Thalaivar Dr. M.G.R. Govt Arts & Science College, Madhanur",
    date: "2017-2020",
  
  },
],
 certifications: [
    {
  name: "DevOps Training Program",
  issuer: "JSpiders, BTM Layout, Bangalore",
  date: "Sep 2023 -- Mar 2024",
}
,
  ],
  extras: {
    languages: [{ name: "English", level: "Native" }],
    interests: ["astronomy", "music"],
  },
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",

  // Cloud
  AWS: "bg-orange-200 text-orange-900",
  DigitalOcean: "bg-cyan-100 text-cyan-800",
  DOKS: "bg-cyan-100 text-cyan-800",

  // Kubernetes / DevOps
  Helm: "bg-purple-100 text-purple-800",
  Prometheus: "bg-orange-100 text-orange-800",
  Grafana: "bg-red-100 text-red-800",
  Vault: "bg-green-100 text-green-800",
  Keycloak: "bg-purple-100 text-purple-800",
  Redis: "bg-red-100 text-red-800",
  RabbitMQ: "bg-orange-100 text-orange-800",

  // Backend / DB
  "Spring Boot": "bg-green-100 text-green-800",
  PostgreSQL: "bg-blue-100 text-blue-800",
  MySQL: "bg-cyan-100 text-cyan-800",

  // IaC
  Terraform: "bg-purple-200 text-purple-900",
   "Infrastructure as Code": "bg-indigo-200 text-indigo-900",
  DevOps: "bg-blue-200 text-blue-900",
  "Multi-Environment": "bg-teal-200 text-teal-900",
  "Remote State": "bg-amber-200 text-amber-900",
  "Terraform Modules": "bg-fuchsia-200 text-fuchsia-900",
  "CI/CD": "bg-red-200 text-red-900",
};
