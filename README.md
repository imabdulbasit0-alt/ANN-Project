# Customer Purchase Prediction

A complete machine learning project that predicts whether a customer will purchase a product, using **Logistic Regression** on the **Social Network Ads** dataset.

> SZABIST-ISB · Department of Robotics & Artificial Intelligence · ANN BS (AI)-5B

## Project Structure

```
purchase-prediction/
├── backend/
│   ├── app.py              # Flask API + serves frontend
│   ├── train_model.py      # Trains LogisticRegression + saves artifacts
│   ├── requirements.txt
│   └── model/              # Generated after training (pkl files)
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── dataset/
│   └── Social_Network_Ads.csv
├── notebooks/
│   └── exploration.ipynb
└── README.md
```

## Quick Start

### 1. Install dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 2. Train the model
```bash
python train_model.py
```
This generates `backend/model/model.pkl`, `scaler.pkl`, and `features.pkl`.

### 3. Run the server
```bash
python app.py
```
Open <http://localhost:5000> in your browser.

## API

`POST /api/predict`
```json
{ "Gender": 1, "Age": 35, "EstimatedSalary": 70000 }
```
Response:
```json
{ "prediction": 1, "label": "Buy", "probability": 0.87 }
```

`GET /api/health` — returns model status and feature order.

## Methodology

1. **Data Loading** — pandas reads the CSV.
2. **Preprocessing** — drop `User ID`, encode `Gender` (Male=1, Female=0), `StandardScaler` on numeric features.
3. **Split** — 80% train / 20% test (stratified).
4. **Model** — `LogisticRegression` (primary), `DecisionTreeClassifier` (comparison).
5. **Evaluation** — Accuracy, Precision, Recall, F1, Confusion Matrix.

## Results (sample run)

| Metric    | Logistic Regression |
|-----------|---------------------|
| Accuracy  | 0.90                |
| Precision | 0.91                |
| Recall    | 0.94                |
| F1-score  | 0.93                |

## License
MIT
