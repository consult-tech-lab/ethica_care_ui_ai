import React, { useState } from "react";

export default function CaseManagementDashboard() {
  const [activeTab, setActiveTab] = useState("ur");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h1 className="text-2xl font-bold text-blue-800">AI Assistive Case Management</h1>
        <p className="text-sm text-gray-600">EthicaCareAI Prototype</p>
      </header>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveTab("ur")}
          className={`px-4 py-2 rounded ${activeTab === "ur" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border"}`}
        >
          Utilization Review
        </button>
        <button
          onClick={() => setActiveTab("sr")}
          className={`px-4 py-2 rounded ${activeTab === "sr" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border"}`}
        >
          Secondary Review
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold text-gray-700">Patient Snapshot</h2>
          <p><strong>Name:</strong> Jane Doe</p>
          <p><strong>MRN:</strong> 0012456</p>
          <p><strong>Insurance:</strong> Horizon BCBS</p>
          <p><strong>Admission Date:</strong> 2025-07-01</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold text-gray-700">Dx / Procedure Codes</h2>
          <p><strong>Primary Dx:</strong> N18.5 (CKD Stage 5)</p>
          <p><strong>Procedure:</strong> 36558 (Central Line)</p>
        </div>
      </section>

      {activeTab === "ur" ? (
        <>
          <section className="bg-white rounded-xl shadow p-4 mb-4">
            <h2 className="font-semibold text-blue-700 mb-2">🧠 AI Assist Recommendation</h2>
            <textarea className="w-full border border-gray-300 rounded p-2" rows="4" placeholder="AI will recommend LOS, guidelines, or discharge planning notes here..."></textarea>
          </section>

          <section className="bg-white rounded-xl shadow p-4 mb-4">
            <h2 className="font-semibold text-blue-800 mb-2">📑 MD Note Analyzer + AI SOAP Generator</h2>
            <textarea className="w-full border border-gray-300 rounded p-2 mb-2" rows="6" placeholder="Paste clinical notes here (e.g., HPI, A/P, ROS)..."></textarea>
            <button className="bg-blue-700 text-white px-4 py-2 rounded shadow mb-2">🧠 Generate AI SOAP Summary (placeholder only)</button>
            <textarea className="w-full border border-gray-300 rounded p-2" rows="5" placeholder="S: [Subjective]
O: [Objective]
A: [Assessment]
P: [Plan]"></textarea>
            <div className="flex items-center mt-2">
              <input type="checkbox" id="nurseReviewed" className="mr-2" />
              <label htmlFor="nurseReviewed" className="text-sm text-gray-700">Nurse has reviewed and approved this summary</label>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded shadow mt-2">📤 Send to Payer via eFax (placeholder only)</button>
          </section>
        </>
      ) : (
        <>
          <section className="bg-white rounded-xl shadow p-4 mb-4">
            <h2 className="font-semibold text-purple-700 mb-2">📋 Secondary Review Notes</h2>
            <textarea className="w-full border border-gray-300 rounded p-2" rows="5" placeholder="Enter peer review or appeal notes here..."></textarea>
          </section>

          <section className="bg-white rounded-xl shadow p-4 mb-6">
            <h2 className="text-lg font-semibold text-purple-800 mb-2">👨‍⚕️ AI-Assisted Note to Physician Advisor / Secondary Reviewer</h2>
            <textarea className="w-full border border-gray-300 rounded p-2 mb-2" rows="4" placeholder="Type nurse input or request to secondary reviewer here..."></textarea>
            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow mb-2 hover:bg-blue-700">💡 Generate AI Draft (Copilot Placeholder)</button>
            <textarea className="w-full border border-gray-300 rounded p-2 mb-2" rows="4" placeholder="AI draft message will appear here... Edit before submitting."></textarea>
            <select className="w-full border border-gray-300 rounded p-2 mb-2">
              <option>Aetna</option>
              <option>Blue Cross Blue Shield</option>
              <option>United Healthcare</option>
              <option>Other</option>
            </select>
            <button className="bg-green-600 text-white px-4 py-2 rounded shadow w-full">📤 Send Note to MD / Payer Review Team</button>
          </section>
        </>
      )}

      <footer className="text-center text-gray-400 text-xs mt-8">
        EthicaCareAI Case Manager • © 2025 by Joanne L.
      </footer>
    </div>
  );
}
