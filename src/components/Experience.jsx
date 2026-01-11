import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

const experiences = [
    {
        status: 'RUNNING',
        title: 'DevOps Engineer',
        company: 'Jio Platforms Limited',
        duration: '2024 - present',
        tasks: [
            'Designed CI/CD pipelines using Jenkins',
            'Managed Kubernetes clusters for microservices',
            'Automated infrastructure with Terraform',
            'Provisioned and managed cloud infrastructure for various projects using Infrastructure as Code tools such as Terraform, leveraging automated CI/CD pipelines in GitLab with approvals.',
            'Reduced deployment time from ~45 minutes to ~10 minutes by automating configuration management and release workflows with Ansible, streamlining deployments in development, UAT, and production environments.',
            'Achieved a 33% reduction in AWS infrastructure costs by rightsizing EC2 instances, optimizing storage, and implementing automated resource lifecycle management.',
            'Implemented centralized ELK (Elasticsearch, Logstash, Kibana) logging infrastructure from scratch, streamlining distributed microservices troubleshooting and reducing root cause analysis time by 70%.',
            'Built and operated an enterprise observability platform with Grafana, Prometheus and Thanos,centralizing metrics from 50+ services and enabling rapid incident response.',
            'Designed and deployed GitLab with Google OAuth integration for CI/CD pipelines, enabling secure automated deployments across UAT, development and production environments with 99% success rate.',
            'Engineered automated vulnerability scanning within CI/CD workflows, configuring SNS-driven notifications to streamline reporting for successful builds and failed security checks.',
            'Orchestrated production Kubernetes clusters on EKS, deploying containerized workloads with optimized resource settings and achieving 99.9% uptime.',
            'Architected event-driven auto-scaling solution for AI transcription service using RabbitMQ based on messages, enabling dynamic scaling from 2 to 50 instances based on workload demand',
            'Authored comprehensive technical documentation covering infrastructure architecture, deployment procedures, and troubleshooting runbooks, reducing onboarding and Debugging time by 50%',
            'Spearheaded performance testing program using JMeter and Locust, conducting load, stress, and volume tests in UAT/Production environments',
            'Mentored DevOps engineers on Terraform, observability, and CI/CD, promoting team-wide automation and infrastructure-as-code adoption' 
        ]
    },
    
];

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="py-5 relative top-0" ref={ref}>
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <div className="section-header">
                        {/* <span className="section-tag"># experience</span> */}
                    </div>
                    <h2 className="section-title">Process History</h2>
                    <p className="section-subtitle">
                        Career timeline and professional experience
                    </p>
                </motion.div>

                {/* Timeline - Centered */}
                <div className="max-w-2xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="text-center"
                        >
                            {/* Status Badge */}
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <span className={`w-3 h-3 rounded-full ${exp.status === 'RUNNING'
                                        ? 'bg-terminal-green animate-pulse'
                                        : 'bg-terminal-blue'
                                    }`} />
                                <span className="text-text-muted font-mono text-sm">[{exp.status}]</span>
                                <span className="text-text font-semibold">{exp.title}</span>
                                <span className="text-text-muted font-mono text-sm">{exp.duration}</span>
                            </div>

                            {/* Card */}
                            <div className="bento-card text-left">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Briefcase className="w-4 h-4 text-terminal-green" />
                                    <span className="text-text font-semibold">{exp.company}</span>
                                </div>
                                <ul className="space-y-3">
                                    {exp.tasks.map((task, i) => (
                                        <li key={i} className="flex items-center gap-3 text-text-muted text-sm">
                                            <CheckCircle className="w-4 h-4 text-terminal-green shrink-0" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center"
                    >
                        {/* Status Badge */}
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="w-3 h-3 rounded-full bg-terminal-purple" />
                            <span className="text-text-muted font-mono text-sm">[GRADUATED]</span>
                            <span className="text-text font-semibold">Bachelor of Engineering</span>
                            <span className="text-text-muted font-mono text-sm">2019 - 2023</span>
                        </div>

                        {/* Card */}
                        <div className="bento-card ">
                            <div className="flex items-center justify-center gap-2">
                                <GraduationCap className="w-4 h-4 text-terminal-purple" />
                                <span className="text-text-muted text-sm">Computer Engineering</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
