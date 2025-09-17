FROM python:3.12-slim
WORKDIR /app

# Upgrade pip first
RUN python -m pip install --upgrade pip

# Copy requirements
COPY apps/ml/requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY apps/ml ./apps/ml

EXPOSE 5000
CMD ["uvicorn", "apps.ml.main:app", "--host", "0.0.0.0", "--port", "5000", "--reload"]
