import { BANDS, BAND_COLORS, BAND_BG } from '../utils/erUtils.js';

export default function BenchmarkGauge({ er, band, benchmarks, platformName, industryName }) {
  const [poor, belowAvg, avg, good, excellent] = benchmarks;

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl p-6 flex flex-col gap-4 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs text-galactic uppercase tracking-wider mb-1">{platformName} · {industryName}</p>
          <p className="text-4xl font-bold text-white">{er.toFixed(2)}%</p>
          <p className="text-sm text-galactic mt-0.5">Engagement Rate</p>
        </div>
        <div className={`border rounded-xl px-4 py-2 text-center self-start sm:self-auto ${BAND_BG[band]}`}>
          <p className={`text-xl font-bold ${BAND_COLORS[band]}`}>{BANDS[band]}</p>
          <p className="text-xs text-galactic mt-0.5">Performance Band</p>
        </div>
      </div>

      {/* Band spectrum bar */}
      <div>
        <div className="flex gap-1 mb-2">
          {BANDS.map((b, i) => (
            <div
              key={b}
              className={`h-3 flex-1 rounded-full transition-all ${i === band ? 'opacity-100' : 'opacity-30'} ${
                i === 0 ? 'bg-coral' : i === 1 ? 'bg-tangerine' : i === 2 ? 'bg-cloudy' : 'bg-turtle'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-galactic gap-1">
          <span className="shrink-0">Poor (&lt;{poor}%)</span>
          <span className="shrink-0">Avg ({avg}%)</span>
          <span className="shrink-0">Excellent ({excellent}%+)</span>
        </div>
      </div>
    </div>
  );
}
