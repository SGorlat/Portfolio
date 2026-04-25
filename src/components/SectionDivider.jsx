import "../style/SectionDivider.css";

function SectionDivider({ label }) {
  return (
    <div className="section-divider">
      <span className="divider-comment">// ──────── {label} ────────</span>
    </div>
  );
}

export default SectionDivider;
