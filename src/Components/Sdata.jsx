const Sdata = [
    {
        sname: 'Never Have I Ever',
        imagescr: 'https://occ-0-4157-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVKB-GwVWV7ntMWyeqjrafa38qL-K4cBfia_mJ05gLAcdrgQTeNDYhPdFZACgNwHqvJlKUI1RkNKvJMhDDLcRdf2A8weaIE_XEL83_Efm1hpl9vkPEtdC5XS-Eyl8X2p0k0ipIgYliHSwO8P0WeeJWkoAHva6aj1pVOZ6KxuAIqp7-V-x0K3lOhsJVzwWZtCQ_qtr-DkUOSzwowZCWzxIiM-1x-TaG1PduIN8nUUCPHdhLi9B9S-lQiCGrPgzfHpY0vFhkUA2YCG4t2fJKs1cHi6.jpg?r=d94',
        title: 'Netflix Original Series',
        links: 'https://www.netflix.com/in/title/80179190'
    },
    {
        sname:'Stranger Things',
        imagescr:'https://occ-0-4157-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSLzIK7iBvXcgjgmrMG5BgHb57sHX3RSOLtCaxuW83lZWcChht8nLpduu26xt5Mqyemg6oey5lehmIJoz5Hi2og_GbPlwKX4aO6xJRYqHSr9ZggXzcKK-_tSLBK4ee2HeuQn.jpg?r=c68',
        title:  'Netflix Original Series',
        links: 'https://www.netflix.com/in/title/80057281'
    },
    {
        sname:'The Sandman',
        imagescr:'https://occ-0-4157-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfe3aLrs2GeOFekRhfDPA2W6kKgIAAJBUXjO7-L14XUd_OM3TMdw-xZUfJlCi6nM3vm_WKX6SPPKiRo1NLTH_q_mxskqsMbIdI1JtX_R7h6OH20a3aW4NzmOjm7dpH4OlWY7FbXoLHxZsGGhmmvaj_xDhSndHoV4S82CREol_qCVXsBps-1YJwHV85FkN3zp7hi1jDJWzHZ1QLJpxdo6fK93Vr46dzhK78dXQK9pUiAM18a7xY8YMpoIKwMrcW6FSVVcEyu0av0PlyGbHE6k86OFEw.jpg?r=681',
        title:'Netflix Original Series',
        links:'https://www.netflix.com/in/title/81150303'
    },
    {
        sname:'Squid Game',
        imagescr:'https://occ-0-4157-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcQ7U3yYrklI0Rwyn06QUidIOw98JEMk4OdqSvM3X2_wGnlVAlAyOWsopSdbAtHFiTR_g1p7AoI4Ss_o_7FE5BFgm5VGYlDLlTYHjlG25r01Iar_k8lW6SHRcHNPj503rfgq.jpg?r=853',
        title:  'Netflix Original Series',
        links:'https://www.netflix.com/in/title/81040344'
    },
    {
        sname:'Lost in Space',
        imagescr:'https://occ-0-4157-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaMmRuJc9pyTbrRWg4SfH3neOOLEjQut-MTGke-GhUTZ3d1MDJA5Lz2P7AlDhiUznB1RwVe3mTJZsF6GiwnJbyyiViCJbCxf8n8h7aZ5mbuiBshtAAQwHNxoguyPcByx9z9t.jpg?r=152',
        title:  'Netflix Original Series',
        links: 'https://www.netflix.com/in/title/80104198'
    },
    {
        sname:'All of us are dead',
        imagescr:'https://occ-0-4157-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXVw-xGRBSRuvXi6AOFft-5-Yi8lOSa9pCBZb4daNSts9ufqFoZemRPRiPktoiBtFNtzxxMGo404XUI_0OARi61s1SdD-dFAqzAH0W84h0uNBtInoj2hzFIxCBUgHLC0OCYZ.jpg?r=d40',
        title:  'Netflix Original Series',
        links:'https://www.netflix.com/in/title/81237994'
    },
    {
        sname:'Man vs Bee',
        imagescr:'https://occ-0-4157-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVXHkp3tpDTIf3VIza313LSwjHikj-dCfSRGiKzoTjXlzVT9hxiSCR4n96XcuQCHHgmmATY7uisOPRTz_eRsJsZ53KqoEUfUbB4ZSbEgZu2qGjNZ6dM8gB_PVIs2vAXGHGQq.jpg?r=e47',
        title:  'Netflix Original Series',
        links:'https://www.netflix.com/in/title/81222715'
    },
    {
        sname:'Manifest',
        imagescr:'https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVYr-SGgMYzvVGM0sFGGOQ7RNsj8Ns-1VFX-dNcDD8nzbDMOdAilWoySw5yJQvJQpGvrLkMduhB-EZ68U5NORoGXgrD78-e0fo37y02jB-pXwjDXPxiBZlJO-u_SH3KYGXmI.jpg?r=2fe',
        title:  'Netflix Original Series',
        links:'https://www.netflix.com/in/title/80241318'
    },
    {
        sname:'Delhi Crime',
        imagescr:'https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWcASkLoYJZl6f4P27YqvEG9NqtLBEBSZT07wnbTSy8FPBh217z2GWjr_w0OzP0VVTFseGgqWQLNJu-cPC2kXMqJrgbGynylEEbepiiXWaup9u1P52rVChQYdvgwcPFMdPAFGqeBeCbJrjT0CDUQ3L5Qtpt3eR7bHq81rph0ZbunvGeDNknng5EQQnFQfwZNQUxz-gJckj45MZCFXutYyG_C-He1OzAa3Drl3bQgpMVGAuK-1OO6RxDQXJLqbfzDfAdSNr8esshGq4ZJtIF_hnDY.jpg?r=a4f',
        title:  'Netflix Original Series',
        links:'https://www.netflix.com/in/title/81076756'
    },
    {
        sname:'SHE',
        imagescr:'https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSPIHYUolXxschMZbnih8XOZZJZQO2_PrfxncDhLTghI6iU28ySKlV7dY2Q_nKYInYVKRShJlFX5DZLt_ETpeuDS0ySvGtHxNlnO2j3UN146SL6B4NugJTH5GmjGuOakbgu-.jpg?r=df2',
        title:  'Netflix Original Series',
        links:'https://www.netflix.com/in/title/81183494'
    }
]
export default Sdata;