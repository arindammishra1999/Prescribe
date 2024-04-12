\c prescribe

CREATE TABLE Pharmacies (
    license_number VARCHAR(20) PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100),
    phone_number VARCHAR(15),
    password VARCHAR(256) NOT NULL
);

CREATE TABLE Patients (
    health_card_number CHAR(10) PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender CHAR(1),
    birthdate DATE,
    password VARCHAR(256) NOT NULL,
    qr_code_hash VARCHAR(256) UNIQUE NOT NULL,
    default_pharmacy VARCHAR(20) REFERENCES Pharmacies(license_number)
);

CREATE TABLE Prescribers (
    practitioner_id VARCHAR(20) PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(256) NOT NULL
);

CREATE TABLE Prescriptions (
    prescription_id SERIAL PRIMARY KEY,
    patient_health_card_number CHAR(10) REFERENCES Patients(health_card_number) NOT NULL,
    prescriber_practitioner_id VARCHAR(20) REFERENCES Prescribers(practitioner_id) NOT NULL,
    pharmacy_license_number VARCHAR(20) REFERENCES Pharmacies(license_number),
    drug_identification_number VARCHAR(50) NOT NULL,
    drug_name VARCHAR(100) NOT NULL,
    refills INT DEFAULT 0,
    status VARCHAR(50),
    date_issued DATE NOT NULL,
    time_to_complete INT,
    qr_code_hash VARCHAR(256) UNIQUE NOT NULL,
    dispensing_instructions TEXT,
    directions_of_use TEXT,
    medication_details TEXT
);
