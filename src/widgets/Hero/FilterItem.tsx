
export const FilterItem = ({ label }: { label: string }) => (
   
      <div className="flex shrink-0 text-[13px] font-semibold items-center gap-x-3 bg-blue-200/60 shadow-lg px-6 py-4 rounded-lg">
        <h3 className="text-[#003087]">{label}</h3>
        <svg className=""
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15"
            stroke="#003087"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 5L15 15"
            stroke="#003087"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
  );