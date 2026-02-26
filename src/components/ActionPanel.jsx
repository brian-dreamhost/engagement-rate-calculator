import { ACTIONS } from '../utils/erUtils.js';

export default function ActionPanel({ band }) {
  const actions = ACTIONS[band];
  return (
    <div className="card-gradient border border-metal/20 rounded-2xl p-6 flex flex-col gap-4 animate-fadeIn">
      <h3 className="text-white font-semibold">3 Actions to Improve Your ER</h3>
      <ul className="flex flex-col gap-3">
        {actions.map((action, i) => (
          <li key={i} className="flex gap-3 text-sm text-cloudy">
            <span className="text-turtle font-bold shrink-0 w-5">{i + 1}.</span>
            <span>{action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
