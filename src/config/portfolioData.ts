import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "",
    pdf: "./Yokendrakumar_P_DevopsEngineer.pdf",
  },

  personal: {
    name: "Yokendra Kumar P",
    title: "DevOps Engineer",
    headline:
      "DevOps Engineer | Kubernetes (EKS, DOKS) | Terraform | CI/CD | Cloud Infrastructure Automation",

    avatar: "./pro4.jpeg",

    summary:
      "DevOps Engineer with experience building and operating cloud-native infrastructure on AWS and DigitalOcean. Skilled in Kubernetes (EKS, DOKS), Helm-based deployments, CI/CD pipelines, and infrastructure automation using Terraform. Experienced in implementing observability stacks with Prometheus, Grafana, and Loki, and securing microservice platforms using Vault, Keycloak, and Kong API Gateway. Focused on building scalable, reliable, and secure systems that improve developer productivity and operational efficiency.",

    contact: {
      email: "yokendrakumar1999@gmail.com",
      phone: "+91 6380044854",
      location: "Bengaluru, India",
      website: "https://yokendrakumar1999.github.io",

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
    "DevOps Engineer at TrudoSYS (Apr 2024 – Present)",
    "Managing Kubernetes clusters on AWS EKS and DigitalOcean DOKS",
    "Built CI/CD pipelines using Jenkins, Docker, Helm and Git",
    "Implemented monitoring with Prometheus, Grafana and Loki",
  ],

  projects: [
    {
      id: "aws-eks-microservices",

      title: "AWS EKS Microservices Platform",

      description:
        "Designed and deployed a cloud-native microservices platform on AWS EKS. Implemented CI/CD pipelines, integrated Keycloak for RBAC authentication, and used Redis and RabbitMQ for caching and asynchronous communication. Monitoring and alerting were implemented using Prometheus and Grafana.",

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

      links: [
        {
          label: "GitHub",
          url: "https://github.com/Yokendrakumar1999",
        },
      ],

      image: "./project-1.png",
      href: "",
      isUnderDevelopment: false,
    },

    {
      id: "doks-springboot-react",

      title: "DigitalOcean Kubernetes Microservices (Full Stack)",

      description:
        "Deployed Spring Boot microservices and a React frontend on DigitalOcean Kubernetes (DOKS). Configured Kong API Gateway for secure routing with TLS, JWT authentication, rate limiting and CORS policies. Implemented Redis caching, RabbitMQ messaging, and PostgreSQL database with internal DNS-based service communication.",

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

      links: [
        {
          label: "GitHub",
          url: "https://github.com/Yokendrakumar1999",
        },
      ],

      image: "./project-2.png",
      href: "",
      isUnderDevelopment: false,
    },

    {
      id: "terraform-multi-env",

      title: "Terraform Multi-Environment Infrastructure",

      description:
        "Provisioned cloud infrastructure using Terraform across isolated environments (dev, stage, QA, production). Implemented reusable Terraform modules, remote state management, and environment-specific variables to enable consistent and automated infrastructure deployments.",

      tags: [
        "Terraform",
        "Infrastructure as Code",
        "DevOps",
        "Multi-Environment",
        "Remote State",
        "Terraform Modules",
        "CI/CD",
      ],

      links: [
        {
          label: "GitHub",
          url: "https://github.com/Yokendrakumar1999",
        },
      ],

      image: "./project-3.png",
      href: "",
      isUnderDevelopment: false,
    },
  ],

  skills: [
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
        "Building and operating Kubernetes-based cloud infrastructure across AWS and DigitalOcean platforms.",

      bullets: [
        "Deployed and managed microservices platforms on AWS EKS and DigitalOcean Kubernetes using Helm.",
        "Designed CI/CD pipelines using Jenkins, Docker, and Git to automate build and deployment workflows.",
        "Configured Kong API Gateway for secure routing with TLS termination, JWT authentication, rate limiting, and CORS policies.",
        "Implemented observability stack using Prometheus, Grafana, and Loki for metrics, logging, and alerting.",
        "Applied Kubernetes container security best practices including non-root containers, read-only filesystems, and restricted Linux capabilities.",
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
        "Worked on infrastructure automation and CI/CD pipelines for Kubernetes-based applications.",

      bullets: [
        "Designed three-tier application architecture on AWS using EKS, ALB and RDS.",
        "Built Jenkins CI/CD pipelines reducing deployment time by 60%.",
        "Containerized applications with Docker and deployed them to Kubernetes clusters.",
        "Monitored applications using CloudWatch and Prometheus.",
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
      date: "Sep 2023 – Mar 2024",
    },
  ],

  extras: {
    languages: [{ name: "English", level: "Professional" }],
    interests: ["astronomy", "music"],
  },
};

// ---------- TAG COLORS ----------

export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",

  AWS: "bg-orange-200 text-orange-900",
  DigitalOcean: "bg-cyan-100 text-cyan-800",
  DOKS: "bg-cyan-100 text-cyan-800",

  Helm: "bg-purple-100 text-purple-800",
  Prometheus: "bg-orange-100 text-orange-800",
  Grafana: "bg-red-100 text-red-800",
  Vault: "bg-green-100 text-green-800",
  Keycloak: "bg-purple-100 text-purple-800",
  Redis: "bg-red-100 text-red-800",
  RabbitMQ: "bg-orange-100 text-orange-800",

  "Spring Boot": "bg-green-100 text-green-800",
  PostgreSQL: "bg-blue-100 text-blue-800",
  MySQL: "bg-cyan-100 text-cyan-800",

  Terraform: "bg-purple-200 text-purple-900",
  "Infrastructure as Code": "bg-indigo-200 text-indigo-900",
  DevOps: "bg-blue-200 text-blue-900",
  "Multi-Environment": "bg-teal-200 text-teal-900",
  "Remote State": "bg-amber-200 text-amber-900",
  "Terraform Modules": "bg-fuchsia-200 text-fuchsia-900",
  "CI/CD": "bg-red-200 text-red-900",
};