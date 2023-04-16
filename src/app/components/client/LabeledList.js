export default function LabeledList({ label, data }) {
    return (
        <div className="flex justify-start items-center gap-2">
            <span>{label}: </span>
            {data.map((item, index) => (
                <span key={index}>{item.name}</span>
            ))}
        </div>
    )
}