// ========================================================================
// firebase-config.js
// ========================================================================
// วางค่าจาก Firebase Console > Project settings > General > Your apps
// > SDK setup and configuration ลงในนี้ ทั้ง login.html และ
// index.html จะ import ไฟล์นี้ไฟล์เดียว แก้ที่นี่ที่เดียวพอ
// ========================================================================

const firebaseConfig = {
  apiKey: "AIzaSyC6BA_qlVJcaBGjNONOB1dRqLwVLfSyxB8",
  authDomain: "eeg-evproposal.firebaseapp.com",
  projectId: "eeg-evproposal",
  storageBucket: "eeg-evproposal.firebasestorage.app",
  messagingSenderId: "78681161224",
  appId: "1:78681161224:web:fe083bb81560fad2121bbd",
  measurementId: "G-8DETXWV0Y3",
};

// ตำแหน่งของ Cloud Function ที่เรียกสร้างภาพ (แก้ projectId ให้ตรงกับของคุณ
// และแก้ region ถ้าคุณ deploy function ไว้ region อื่น)
const CLOUD_FUNCTION_REGION = "us-central1";
const CLOUD_FUNCTION_NAME = "generateStationImage";
