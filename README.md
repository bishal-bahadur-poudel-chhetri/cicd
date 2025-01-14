# Node.js Project Deployment  

## Description  
This project demonstrates an automated deployment pipeline for a Node.js application using modern DevOps practices. The pipeline leverages Terraform, Ansible, Docker, Kubernetes, and Jenkins to build, configure, and deploy the application efficiently and reliably.  

## Tools Used  
- **Terraform**: To provision and manage cloud resources.  
- **Ansible**: To configure jenkins, Kubernetes master and worker nodes.  
- **Jenkins**: To orchestrate the CI/CD pipeline.  
- **Docker**: To containerize the Node.js application.  
- **Kubernetes**: To orchestrate and manage application containers.  

## Features  
- Automated infrastructure provisioning using Terraform.  
- Configuring Kubernetes clusters (master and worker nodes) with Ansible.  
- Jenkins pipeline to build, test, and deploy the Node.js application.  
- Docker images built dynamically based on parameters passed to the pipeline.  
- Image deployment updates on Kubernetes based on Docker Hub changes.  

## Pipeline Workflow  
1. **Resource Creation**:  
   - Terraform is used to provision the necessary infrastructure for the project.  

2. **Cluster Configuration**:  
   - Ansible automates the setup of Kubernetes master and worker nodes.  

3. **Pipeline Execution (via Jenkins)**:  
   - Jenkins pipeline takes input parameters.  
   - Based on the parameters, a Docker image of the Node.js application is built.  
   - The Docker image is pushed to Docker Hub. 
   - Update/deploy the image from kubernetes 

4. **Kubernetes Deployment**:  
   - Kubernetes updates the application containers with the new image from Docker Hub.  

## Setup and Installation  

### Prerequisites  
- Terraform installed on your system.  
- Ansible installed and configured.  
- Jenkins setup and accessible.  
- Docker and Kubernetes installed and configured.  

### Steps to Setup  
1. **Infrastructure Setup with Terraform**:  
   - Navigate to the `terraform` directory.  
   - Initialize and apply the configuration:  
     ```bash
     terraform init  
     terraform apply  --var-file="prod.tf"
     ```  

2. **Kubernetes Configuration with Ansible**:  
   - Run the Ansible playbook to configure the Kubernetes cluster:  
     ```bash
     ansible-playbook -i inventory sites.yml  
     ```  

3. **Jenkins Pipeline Configuration**:  
   - Create a Jenkins pipeline job.  
   - Configure the pipeline script to execute the following steps:  
     - Build the Docker image.  
     - Push the image to Docker Hub.  
     - Trigger a Kubernetes deployment update.  

4. **Docker Hub and Kubernetes Integration**:  
   - Ensure Kubernetes deployment YAML files are configured to pull the correct image from Docker Hub.  

## Usage  
- **Triggering the Pipeline**:  
  - Access the Jenkins pipeline and provide the required parameters (e.g., version number or environment).  
  - Run the pipeline to build and deploy the application.  

![image](https://github.com/user-attachments/assets/5b7d6387-2600-4685-8362-9e4548bfbabb)
![image](https://github.com/user-attachments/assets/b2224718-2e82-4349-8bb9-40c359ed6b37)
![image](https://github.com/user-attachments/assets/61e03598-0a70-44d5-b606-5f4d53107d31)
![image](https://github.com/user-attachments/assets/c7ae7495-e5c4-46d6-bd7e-016e1eda837a)
![image](https://github.com/user-attachments/assets/763307d8-f51e-45c8-bccc-1d2a7801b437)
![image](https://github.com/user-attachments/assets/22b54dcb-0baa-4b0f-bfd3-bb1637cc80d8)
![image](https://github.com/user-attachments/assets/28455957-91d3-4c58-92e4-8fcba4232dba)
![image](https://github.com/user-attachments/assets/a476bffe-72c5-4775-952c-26c0258bcd6b)
![image](https://github.com/user-attachments/assets/e294f16e-06bf-4962-a6fe-87eb655cc80b)
![image](https://github.com/user-attachments/assets/03dfe431-8392-4c56-a86b-d977edd7def9)
![image](https://github.com/user-attachments/assets/c243062b-1e65-4a85-8a21-a0c18d15477b)
![image](https://github.com/user-attachments/assets/b6985a54-b978-4bf6-835f-77f2994b5df0)







 

