

# 🛡️ Gate Pass Management System (GPMS)

A web-based application designed to efficiently monitor and manage the entry and exit of employees, visitors, and other personnel within an organization. The Gate Pass Management System enhances security, transparency, and operational efficiency by digitizing traditional paper-based gate pass workflows.

---

## 🔧 Features

- 🧑‍💼 **Employee & Visitor Management**  
  Maintain records of all visitors and employees with details like name, contact info, purpose of visit, etc.

- 🚪 **Gate Pass Generation**  
  Auto-generate unique gate passes for in-time and out-time tracking.

- ⏱️ **Real-time Entry/Exit Logs**  
  Track movement of individuals with timestamps and status.

- 🔐 **Role-based Access Control**  
  Different dashboards and privileges for Admin, Security, and Employees.

- 📊 **Analytics & Reports**  
  Generate daily, weekly, or monthly reports of all gate activity.

- 📨 **Email/SMS Notifications** *(optional)*  
  Notify host employees when a visitor checks in.

---

## 🖥️ Tech Stack

| Layer        | Technology               |
|--------------|--------------------------|
| Frontend     | HTML5, CSS3, JavaScript, Bootstrap |
| Backend      | Python (Flask / Django / Node.js) |
| Database     | SQLite / MySQL / PostgreSQL |
| Authentication | JWT / Session-based Auth |
| Deployment   | Heroku / Render / Localhost |

---

## 🚀 Getting Started

### Prerequisites

- Python 3.x
- pip (Python package manager)
- A web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mayourbukhari/gpms.git
   cd gpms


2. **Create and activate a virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the server**

   ```bash
   python app.py
   ```

5. **Visit in Browser**

   ```
   http://localhost:5000
   ```

---

## 🖼️ Screenshots

| Dashboard                               | Gate Pass Entry                      | Visitor Log                          |
| --------------------------------------- | ------------------------------------ | ------------------------------------ |
| ![Dashboard](screenshots/dashboard.png) | ![Entry](screenshots/entry_form.png) | ![Logs](screenshots/visitor_log.png) |

---

## 🧪 Sample Credentials (For Testing)

| Role     | Email                                         | Password  |
| -------- | --------------------------------------------- | --------- |
| Admin    | [admin@gpms.com](mailto:admin@gpms.com)       | admin123  |
| Security | [security@gpms.com](mailto:security@gpms.com) | secure123 |
| Employee | [employee@gpms.com](mailto:employee@gpms.com) | emp123    |

---

## 📁 Project Structure

```
gpms/
│
├── app.py                 # Main server file
├── templates/             # HTML templates
├── static/                # CSS, JS, Images
├── models.py              # DB models
├── routes/                # Route handlers
├── requirements.txt       # Python dependencies
└── README.md              # This file
```

---

## 📌 Future Enhancements

* QR Code based gate passes
* Biometric / RFID integration
* Mobile App Interface (Flutter/React Native)
* Cloud backup & remote monitoring

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 📬 Contact

**Project Lead:** [Syed Mohsin Bukhari](mailto:syedmohsinb786@gmail.com)
**GitHub:** [github.com/your-username](https://github.com/mayourbukhari)



 **Secure your workspace with GPMS 🚪✨**



