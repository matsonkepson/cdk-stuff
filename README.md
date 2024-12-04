# Try lambda with LocalStack

## Usage

1. Clone the repository

2. Install the code dependencies

```bash
npm install
```

3. Install dependencies for LocalStack

```bash
# Install globally
npm install -g aws-cdk-local aws-cdk

# Verify it installed correctly
cdklocal --version
# e.g. 2.171.1 (build a95560c)
```

4. Run LocalStack

```bash
export LOCALSTACK_AUTH_TOKEN="yourSecretTokenFromLocalstack"
docker-compose -f localstack/docker-compose.yml up 
```

5. Bootstrap and deploy

```bash
cdklocal bootstarp 

cdklocal deploy
```
