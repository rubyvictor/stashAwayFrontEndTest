# Starting Up

This is a frontend test created with React and fetching a mock api to render data.

Please do a ```git clone https://github.com/rubyvictor/stashAwayFrontEndTest.git```

cd into the folder created.

Then `yarn install`

Followed by `yarn start`

## Mock API

1. `https://demo9414363.mockable.io/api/stashaway/frontend`
2. Here's the JSON for reference

```{
portfolios: {
current: {
type: "standard",
exp_returns: 0.064,
var: 0.034,
optimised_for: "USD",
currency_exposure: {
usd: 0.3,
sgd: 0.3,
eur: 0.2,
jpy: 0.1,
others: 0.1
},
allocation_one: {
type: "US Equities",
etfs: [
{
first: "US Equities (Total)",
ticker: "VTTI",
weight: 0.03
},
{
second: "US Equities (Dividends)",
ticker: "VIG",
weight: 0.06
},
{
third: "US Equities (Small-Cap, Value)",
ticker: "VBK",
weight: 0.012
},
{
fourth: "US Equities (Mid-Cap, Value)",
ticker: "VOE",
weight: 0.03
},
{
fifth: "Convertible Bonds",
ticker: "CWB",
weight: 0.18
}
]
},
allocation_two: {
type: "International Equities",
etfs: [
{
first: "Asia ex-japan Equities",
ticker: "VTIT",
weight: 0.123
},
{
second: "China Equities",
ticker: "PGJ",
weight: 0.002
},
{
third: "US Total Stock",
ticker: "VTI",
weight: 0.237
}
]
},
allocation_three: {
type: "International Bonds",
etfs: [
{
first: "Bonds",
ticker: "CBB",
weight: 0.326
}
]
}
},
new: {
type: "riskier",
exp_returns: 0.092,
var: 0.056,
optimised_for: "EUR",
currency_exposure: {
usd: 0.2,
sgd: 0.2,
eur: 0.4,
jpy: 0.1,
others: 0.1
},
allocation_one: {
type: "US Equities",
etfs: [
{
first: "US Equities (Total)",
ticker: "VTTI",
weight: 0.02
},
{
second: "US Equities (Dividends)",
ticker: "VIG",
weight: 0.05
},
{
third: "US Equities (Small-Cap, Value)",
ticker: "VBK",
weight: 0.012
},
{
fourth: "US Equities (Mid-Cap, Value)",
ticker: "VOE",
weight: 0.03
},
{
fifth: "Convertible Bonds",
ticker: "CWB",
weight: 0.2
}
]
},
allocation_two: {
type: "International Equities",
etfs: [
{
first: "Asia ex-japan Equities",
ticker: "VTIT",
weight: 0.223
},
{
second: "China Equities",
ticker: "PGJ",
weight: 0.102
},
{
third: "US Total Stock",
ticker: "VTI",
weight: 0.237
}
]
},
allocation_three: {
type: "International Bonds",
etfs: [
{
first: "Bonds",
ticker: "CBB",
weight: 0.126
}
]
}
}
}
} ```