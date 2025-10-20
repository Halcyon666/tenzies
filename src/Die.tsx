import type { DiceProp } from "./App";

/**
 * Recommendation
 * For scalable apps / larger state management: Option 1 is preferred
 * because it separates state (data) from behavior (actions), which aligns with React best practices.
 */
const Die: React.FC<{ die: DiceProp; changeToHeld: () => void }> = ({
  die,
  changeToHeld,
}) => {
  const { value, isHeld } = die;

  // Define pip layouts for each number
  const pipLayouts: Record<number, number[]> = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9],
  };

  return (
    <button
      className={isHeld ? "held" : "notHeld"}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
      onClick={changeToHeld}
    >
      <div className="pips">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className={`pip ${
              pipLayouts[value].includes(i + 1) ? "visible" : ""
            }`}
          ></span>
        ))}
      </div>
    </button>
  );
};

export default Die;
