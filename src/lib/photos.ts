// Real-world photography (Unsplash CDN). Swap for licensed airline photography before launch.
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const photos = {
  heroWing: u("photo-1436491865332-7a61a109cc05", 1920),
  flightDeckMood: u("photo-1518684079-3c830dcef090", 1400),
  cargo: u("photo-1580674285054-bed31e145f59", 1000),
  bizjet: u("photo-1540962351504-03099e0a754b", 1000),
  terminal: u("photo-1605237165959-dcc784975d51", 1400),
  riyadh: u("photo-1663900108404-a05e8bf82cda", 900),
  jeddah: u("photo-1622274421175-87b87bde7fca", 900),
  madinah: u("photo-1602769490455-36cf9734dbcb", 900),
  makkah: u("photo-1592326871020-04f58c1a52f3", 900),
  alula: u("photo-1609151712779-4f86b3de7308", 900),
  abha: u("photo-1655911153461-d511211b6772", 900),
  dubai: u("photo-1546412414-e1885259563a", 900),
  london: u("photo-1513635269975-59663e0ac1ad", 900),
  newyork: u("photo-1538970272646-f61fabb3a8a2", 900),
  singapore: u("photo-1525625293386-3f8f99389edd", 900),
  delhi: u("photo-1548013146-72479768bada", 900),
  athens: u("photo-1603565816030-6b389eeb23cb", 900),
  muscat: u("photo-1597734187998-e1931acfe2ed", 900),
  kingdomTower: u("photo-1651428016256-70b39e3483da", 1200),
};
