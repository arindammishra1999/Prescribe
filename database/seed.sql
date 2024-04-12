\c prescribe

INSERT INTO Pharmacies (license_number, email, name, location, phone_number, password)
VALUES
('LIC123456', 'pharmacy1@example.com', 'Community Pharmacy', '123 Main St, Anytown', '123-456-7890', '$argon2id$v=19$m=65536,t=3,p=4$1Z6OioC9B3AxCjpHk00oYA$Wv8JyCmLLH30ysca8t7hMoZZp55gao07F9vGMXnuwho'),
('LIC234567', 'pharmacy2@example.com', 'MediCare Pharmacy', '456 Elm St, Othertown', '456-789-0123', '$argon2id$v=19$m=65536,t=3,p=4$jhBr3DP9ZY5PDbEgx37jsw$2rgDjS6yLYcVdWbdU7/20ExrpBVe0rAV/lim+U1YRZA'),
('LIC345678', 'pharmacy3@example.com', 'QuickMeds', '789 Oak St, Anothertown', '789-012-3456', '$argon2id$v=19$m=65536,t=3,p=4$jhBr3DP9ZY5PDbEgx37jsw$2rgDjS6yLYcVdWbdU7/20ExrpBVe0rAV/lim+U1YRZA');

INSERT INTO Patients (health_card_number, email, first_name, last_name, gender, birthdate, password, qr_code_hash, default_pharmacy)
VALUES
('HCN1234567', 'patient1@example.com', 'John', 'Doe', 'M', '1980-05-15', '$argon2id$v=19$m=65536,t=3,p=4$7iiupUJ4q8/qQPQ5NY7Qbw$r41DxxjmHlTW2EP2l+nCgpM2sAnshpQ5RHaUwOMx9Bw', '$argon2id$v=19$m=65536,t=3,p=4$CR0wBRgMJz6hpyRB3J2h0g$kSzTxjEXE6Ey5Jvn64jJviw/e31aRH99o7/t4Rn1zdM', 'LIC123456'),
('HCN2345678', 'patient2@example.com', 'Jane', 'Smith', 'F', '1990-10-20', '$argon2id$v=19$m=65536,t=3,p=4$02iqWrDVE5AHFOtmaMtkBA$gdJwKey884Yx1TEel6TG/dyTf+af0uLPx6DZt/xvuxg', '$argon2id$v=19$m=65536,t=3,p=4$jUeD4IHv3GzkiZJ4gjlHmw$BAjuZ4rnUWNK7xtaQTHFEKd6Dnws3aDRwuIBKN1nXoc', 'LIC123456'),
('HCN3456789', 'patient3@example.com', 'Michael', 'Johnson', 'M', '1975-02-28', '$argon2id$v=19$m=65536,t=3,p=4$B7n9kNEKktUJH5fEZZPDVg$0CmgjcI58Gd63/HP7mE1S/OWrb4t+Bu9e7RS30jqXrg', '$argon2id$v=19$m=65536,t=3,p=4$L3fkvrDB/ATpjYQ5/8iqgw$J/0CURTXoN59vSmRO+AjUn3J0orNcurNn/kqS0ccDrQ', 'LIC123456');

INSERT INTO Prescribers (practitioner_id, email, first_name, last_name, password)
VALUES
('PRAC1234', 'doctor1@example.com', 'Dr. Sarah', 'Anderson', '$argon2id$v=19$m=65536,t=3,p=4$jvSMZLde6ovQHP/4iVLCIw$CXA252zawVNKCVbl3DO55plILGO+ubkCQHCyoxRIcpo'),
('PRAC2345', 'doctor2@example.com', 'Dr. David', 'Wilson', '$argon2id$v=19$m=65536,t=3,p=4$TpZuItro2PRl2HWySnolsQ$uFWw0aQow9jKvzjpXiqnIlVDeffLTojri2bI3keBnds'),
('PRAC3456', 'doctor3@example.com', 'Dr. Emily', 'Brown', '$argon2id$v=19$m=65536,t=3,p=4$RF92wnAPmsq9hrJjOXyV5A$YxOw2Wug0YC+V7aWTc0r4MyOTR7/fUZJST6VCv2kQf4');

INSERT INTO Prescriptions (patient_health_card_number, prescriber_practitioner_id, pharmacy_license_number, drug_identification_number, drug_name, refills, status, date_issued, time_to_complete, qr_code_hash, dispensing_instructions, directions_of_use, medication_details)
VALUES
('HCN1234567', 'PRAC1234', 'LIC123456', 'ABC123', 'Medicine A', 3, 'pending', '2024-03-21', 3, '$argon2id$v=19$m=65536,t=3,p=4$WWOVLzHV81cNPP0JFYnA6g$a3l2L4x1URh6SmlD6Pw9k6U9GvX4EsQcw3PZ5nCEank', 'Take one tablet by mouth daily', 'Take with food', 'Dosage: 10mg'),
('HCN2345678', 'PRAC2345', 'LIC234567', 'XYZ456', 'Medicine B', 2, 'filled', '2024-03-20', 7, '$argon2id$v=19$m=65536,t=3,p=4$k3Vjz+rOc7mgNqo3/0lEZw$gf4bGVGJ/fPYVQJ0rbIyJV4UieKKEO8QCp8BaPCQ/wc', 'Take two tablets by mouth twice a day', 'Take with water', 'Dosage: 20mg'),
('HCN3456789', 'PRAC3456', 'LIC345678', 'DEF789', 'Medicine C', 1, 'ready', '2024-03-19', 5, '$argon2id$v=19$m=65536,t=3,p=4$wrgqIEohRqdDSc09QmWuxw$L82lsOyPI6YpJ119cwWyG2a2QbzSIZl0TVJh2B9F0Lk', 'Take as directed by physician', 'Take before bedtime', 'Dosage: 30mg');
