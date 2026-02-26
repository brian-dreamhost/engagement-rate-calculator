import { useState } from 'react'
import BenchmarkGauge from './components/BenchmarkGauge.jsx'
import ActionPanel from './components/ActionPanel.jsx'
import { FORMULAS, BENCHMARKS, getBand } from './utils/erUtils.js'

const PLATFORM_KEYS = Object.keys(BENCHMARKS)

export default function App() {
  const [platform, setPlatform] = useState('instagram')
  const [industry, setIndustry] = useState('retail')
  const [formula, setFormula] = useState('standard')
  const [inputs, setInputs] = useState({ likes: '', comments: '', shares: '', saves: '', followers: '', reach: '' })
  const [result, setResult] = useState(null)

  const platformData = BENCHMARKS[platform]
  const industryKeys = Object.keys(platformData.industries)
  const industryData = platformData.industries[industry] || platformData.industries[industryKeys[0]]
  const formulaData = FORMULAS[formula]

  const set = field => e => setInputs(p => ({ ...p, [field]: e.target.value }))

  const calculate = () => {
    const nums = {}
    Object.entries(inputs).forEach(([k, v]) => { nums[k] = parseFloat(v) || 0 })
    const er = formulaData.calculate(nums)
    const band = getBand(er, industryData.benchmarks)
    setResult({ er, band })
  }

  const canCalculate = inputs.likes !== '' && inputs.followers !== ''

  return (
    <div className="bg-glow bg-grid min-h-screen">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-galactic">
          <a href="https://seo-tools-tau.vercel.app/" className="text-azure hover:text-white transition-colors">Free Tools</a>
          <span className="mx-2 text-metal" aria-hidden="true">/</span>
          <a href="https://seo-tools-tau.vercel.app/social-media/" className="text-azure hover:text-white transition-colors">Social Media Tools</a>
          <span className="mx-2 text-metal" aria-hidden="true">/</span>
          <span className="text-cloudy" aria-current="page">Engagement Rate Calculator</span>
        </nav>

        <div className="text-center mb-10">
          <div className="inline-flex items-center border border-turtle text-turtle rounded-full px-4 py-2 text-sm font-medium mb-4">
            Free Social Media Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Engagement Rate Calculator</h1>
          <p className="text-cloudy text-lg max-w-2xl mx-auto">
            Calculate your engagement rate and see how it stacks up against industry benchmarks — with a plain-English explanation of what your score means and 3 specific actions to improve it.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Settings */}
          <div className="card-gradient border border-metal/20 rounded-2xl p-6 flex flex-col gap-5">
            <h2 className="text-white font-semibold text-lg">Your Settings</h2>

            {/* Platform */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-cloudy" id="platform-label">Platform</p>
              <div className="flex flex-wrap gap-2" role="group" aria-labelledby="platform-label">
                {PLATFORM_KEYS.map(key => (
                  <button
                    key={key}
                    onClick={() => { setPlatform(key); setResult(null) }}
                    aria-pressed={platform === key}
                    className={`px-3 py-2 min-h-[44px] rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss ${platform === key ? 'border-azure bg-azure/10 text-azure' : 'border-metal/30 text-galactic hover:text-cloudy hover:border-metal/50'}`}
                  >
                    {BENCHMARKS[key].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Industry */}
            <div className="flex flex-col gap-2">
              <label htmlFor="industry-select" className="text-sm font-medium text-cloudy">Industry</label>
              <select
                id="industry-select"
                value={industry}
                onChange={e => { setIndustry(e.target.value); setResult(null) }}
                className="bg-midnight border border-metal/30 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
              >
                {Object.entries(platformData.industries).map(([key, val]) => (
                  <option key={key} value={key}>{val.name}</option>
                ))}
              </select>
            </div>

            {/* Formula */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-cloudy">Formula</label>
              <div className="flex flex-col gap-1">
                {Object.values(FORMULAS).map(f => (
                  <label key={f.id} className="flex items-start gap-3 cursor-pointer min-h-[44px] py-1">
                    <input
                      type="radio"
                      name="formula"
                      value={f.id}
                      checked={formula === f.id}
                      onChange={() => { setFormula(f.id); setResult(null) }}
                      className="mt-0.5 w-4 h-4 flex-shrink-0 accent-azure"
                    />
                    <div>
                      <p className="text-sm text-white font-medium">{f.name}</p>
                      <p className="text-xs text-galactic">{f.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { field: 'likes', label: 'Likes' },
                { field: 'comments', label: 'Comments' },
                { field: 'shares', label: 'Shares', optional: true },
                { field: 'saves', label: 'Saves', optional: true },
                { field: 'followers', label: 'Followers' },
                { field: 'reach', label: 'Reach', optional: formula !== 'reach' },
              ].map(({ field, label, optional }) => (
                <div key={field} className="flex flex-col gap-1">
                  <label htmlFor={`input-${field}`} className="text-xs text-cloudy">{label}{optional ? ' (optional)' : ''}</label>
                  <input
                    id={`input-${field}`}
                    type="number"
                    min="0"
                    value={inputs[field]}
                    onChange={set(field)}
                    placeholder="0"
                    className="bg-midnight border border-metal/30 rounded-lg px-3 py-2 text-sm text-white placeholder:text-galactic focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={calculate}
              disabled={!canCalculate}
              aria-disabled={!canCalculate}
              className="w-full py-3 min-h-[44px] rounded-lg bg-azure text-white font-semibold hover:bg-azure-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
            >
              Calculate Engagement Rate
            </button>
            {!canCalculate && (
              <p className="text-xs text-galactic text-center -mt-2">Enter Likes and Followers to calculate</p>
            )}
          </div>

          {result && (
            <>
              <BenchmarkGauge
                er={result.er}
                band={result.band}
                benchmarks={industryData.benchmarks}
                platformName={platformData.name}
                industryName={industryData.name}
              />
              <ActionPanel band={result.band} />
            </>
          )}
        </div>

        <footer className="mt-16 pt-8 border-t border-metal/30 text-center text-sm text-galactic">
          Free marketing tools by{' '}
          <a href="https://www.dreamhost.com" target="_blank" rel="noopener" className="text-azure hover:text-white transition-colors">DreamHost</a>
        </footer>
      </div>
    </div>
  )
}
