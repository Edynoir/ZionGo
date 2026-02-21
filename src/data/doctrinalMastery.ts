export interface MasteryScripture {
    id: string;
    volume: 'Old Testament' | 'New Testament' | 'Book of Mormon' | 'Doctrine and Covenants';
    reference: string;
    text: string;
    url: string;
}

export const masteryData: MasteryScripture[] = [
    // OLD TESTAMENT
    {
        id: 'ot-1',
        volume: 'Old Testament',
        reference: 'Moses 1:39',
        text: 'This is my work and my glory—to bring to pass the immortality and eternal life of man.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1?lang=eng&id=39#p39'
    },
    {
        id: 'ot-2',
        volume: 'Old Testament',
        reference: 'Moses 7:18',
        text: 'The Lord called his people Zion, because they were of one heart and one mind.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/7?lang=eng&id=18#p18'
    },
    {
        id: 'ot-3',
        volume: 'Old Testament',
        reference: 'Abraham 2:9–11',
        text: 'The Lord promised Abraham that his seed would “bear this ministry and Priesthood unto all nations.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/2?lang=eng&id=9-11#p9'
    },
    {
        id: 'ot-4',
        volume: 'Old Testament',
        reference: 'Abraham 3:22–23',
        text: 'As spirits we “were organized before the world was.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng&id=22-23#p22'
    },
    {
        id: 'ot-5',
        volume: 'Old Testament',
        reference: 'Genesis 1:26–27',
        text: 'God created man in his own image.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1?lang=eng&id=26-27#p26'
    },
    {
        id: 'ot-6',
        volume: 'Old Testament',
        reference: 'Genesis 2:24',
        text: 'A man … shall cleave unto his wife: and they shall be one.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/gen/2?lang=eng&id=24#p24'
    },
    {
        id: 'ot-7',
        volume: 'Old Testament',
        reference: 'Genesis 39:9',
        text: 'How then can I do this great wickedness, and sin against God?',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/gen/39?lang=eng&id=9#p9'
    },
    {
        id: 'ot-8',
        volume: 'Old Testament',
        reference: 'Exodus 20:3–17',
        text: 'The Ten Commandments',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/ex/20?lang=eng&id=3-17#p3'
    },
    {
        id: 'ot-9',
        volume: 'Old Testament',
        reference: 'Joshua 24:15',
        text: 'Choose you this day whom ye will serve.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/josh/24?lang=eng&id=15#p15'
    },
    {
        id: 'ot-10',
        volume: 'Old Testament',
        reference: 'Psalm 24:3–4',
        text: 'Who shall stand in his holy place? He that hath clean hands, and a pure heart.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/ps/24?lang=eng&id=3-4#p3'
    },
    {
        id: 'ot-11',
        volume: 'Old Testament',
        reference: 'Proverbs 3:5–6',
        text: 'Trust in the Lord with all thine heart … and he shall direct thy paths.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/prov/3?lang=eng&id=5-6#p5'
    },
    {
        id: 'ot-12',
        volume: 'Old Testament',
        reference: 'Isaiah 1:18',
        text: 'Though your sins be as scarlet, they shall be as white as snow.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/1?lang=eng&id=18#p18'
    },
    {
        id: 'ot-13',
        volume: 'Old Testament',
        reference: 'Isaiah 5:20',
        text: 'Woe unto them that call evil good, and good evil.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/5?lang=eng&id=20#p20'
    },
    {
        id: 'ot-14',
        volume: 'Old Testament',
        reference: 'Isaiah 29:13–14',
        text: 'The restoration of the gospel is “a marvellous work and a wonder.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/29?lang=eng&id=13-14#p13'
    },
    {
        id: 'ot-15',
        volume: 'Old Testament',
        reference: 'Isaiah 53:3–5',
        text: 'Surely [Jesus Christ] hath borne our griefs, and carried our sorrows.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/53?lang=eng&id=3-5#p3'
    },
    {
        id: 'ot-16',
        volume: 'Old Testament',
        reference: 'Isaiah 58:6–7',
        text: 'The blessings of a proper fast',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/58?lang=eng&id=6-7#p6'
    },
    {
        id: 'ot-17',
        volume: 'Old Testament',
        reference: 'Isaiah 58:13–14',
        text: 'Turn away … from doing thy pleasure on my holy day; and call the sabbath a delight.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/58?lang=eng&id=13-14#p13'
    },
    {
        id: 'ot-18',
        volume: 'Old Testament',
        reference: 'Jeremiah 1:4–5',
        text: 'Before I formed thee in the belly … I ordained thee a prophet unto the nations.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/jer/1?lang=eng&id=4-5#p4'
    },
    {
        id: 'ot-19',
        volume: 'Old Testament',
        reference: 'Ezekiel 3:16–17',
        text: 'The prophet is “a watchman unto the house of Israel.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/ezek/3?lang=eng&id=16-17#p16'
    },
    {
        id: 'ot-20',
        volume: 'Old Testament',
        reference: 'Ezekiel 37:15–17',
        text: 'The Bible and the Book of Mormon “shall become one in thine hand.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/ezek/37?lang=eng&id=15-17#p15'
    },
    {
        id: 'ot-21',
        volume: 'Old Testament',
        reference: 'Daniel 2:44–45',
        text: 'God shall “set up a kingdom, which shall never be destroyed.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/dan/2?lang=eng&id=44-45#p44'
    },
    {
        id: 'ot-22',
        volume: 'Old Testament',
        reference: 'Amos 3:7',
        text: 'The Lord God … revealeth his secret unto his servants the prophets.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/amos/3?lang=eng&id=7#p7'
    },
    {
        id: 'ot-23',
        volume: 'Old Testament',
        reference: 'Malachi 3:8–10',
        text: 'The blessings of paying tithing',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/mal/3?lang=eng&id=8-10#p8'
    },
    {
        id: 'ot-24',
        volume: 'Old Testament',
        reference: 'Malachi 4:5–6',
        text: 'Elijah “shall turn … the heart of the children to their fathers.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/mal/4?lang=eng&id=5-6#p5'
    },

    // NEW TESTAMENT
    {
        id: 'nt-1',
        volume: 'New Testament',
        reference: 'Matthew 5:14–16',
        text: 'Let your light so shine before men.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/5?lang=eng&id=14-16#p14'
    },
    {
        id: 'nt-2',
        volume: 'New Testament',
        reference: 'Matthew 11:28–30',
        text: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/11?lang=eng&id=28-30#p28'
    },
    {
        id: 'nt-3',
        volume: 'New Testament',
        reference: 'Matthew 16:15–19',
        text: 'Jesus said, “I will give unto thee the keys of the kingdom.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/16?lang=eng&id=15-19#p15'
    },
    {
        id: 'nt-4',
        volume: 'New Testament',
        reference: 'Matthew 22:36–39',
        text: 'Thou shalt love the Lord thy God. … Thou shalt love thy neighbour.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/22?lang=eng&id=36-39#p36'
    },
    {
        id: 'nt-5',
        volume: 'New Testament',
        reference: 'Luke 2:10–12',
        text: 'For unto you is born this day in the city of David a Saviour, which is Christ the Lord.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/luke/2?lang=eng&id=10-12#p10'
    },
    {
        id: 'nt-6',
        volume: 'New Testament',
        reference: 'Luke 22:19–20',
        text: 'Jesus Christ commanded, partake of the sacrament “in remembrance of me.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/luke/22?lang=eng&id=19-20#p19'
    },
    {
        id: 'nt-7',
        volume: 'New Testament',
        reference: 'Luke 24:36–39',
        text: 'For a spirit hath not flesh and bones, as ye see me have.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/luke/24?lang=eng&id=36-39#p36'
    },
    {
        id: 'nt-8',
        volume: 'New Testament',
        reference: 'John 3:5',
        text: 'Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/john/3?lang=eng&id=5#p5'
    },
    {
        id: 'nt-9',
        volume: 'New Testament',
        reference: 'John 3:16',
        text: 'For God so loved the world, that he gave his only begotten Son.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/john/3?lang=eng&id=16#p16'
    },
    {
        id: 'nt-10',
        volume: 'New Testament',
        reference: 'John 7:17',
        text: 'If any man will do his will, he shall know of the doctrine.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/john/7?lang=eng&id=17#p17'
    },
    {
        id: 'nt-11',
        volume: 'New Testament',
        reference: 'John 17:3',
        text: 'And this is life eternal, that they might know thee the only true God, and Jesus Christ.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/john/17?lang=eng&id=3#p3'
    },
    {
        id: 'nt-12',
        volume: 'New Testament',
        reference: '1 Corinthians 6:19–20',
        text: 'Your body is the temple of the Holy Ghost.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/6?lang=eng&id=19-20#p19'
    },
    {
        id: 'nt-13',
        volume: 'New Testament',
        reference: '1 Corinthians 11:11',
        text: 'Neither is the man without the woman, neither the woman without the man, in the Lord.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/11?lang=eng&id=11#p11'
    },
    {
        id: 'nt-14',
        volume: 'New Testament',
        reference: '1 Corinthians 15:20–22',
        text: 'As in Adam all die, even so in Christ shall all be made alive.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/15?lang=eng&id=20-22#p20'
    },
    {
        id: 'nt-15',
        volume: 'New Testament',
        reference: '1 Corinthians 15:40–42',
        text: 'In the Resurrection, there are three degrees of glory.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/15?lang=eng&id=40-42#p40'
    },
    {
        id: 'nt-16',
        volume: 'New Testament',
        reference: 'Ephesians 1:10',
        text: 'In the dispensation of the fulness of times he might gather together in one all things in Christ.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/1?lang=eng&id=10#p10'
    },
    {
        id: 'nt-17',
        volume: 'New Testament',
        reference: 'Ephesians 2:19–20',
        text: 'The Church is “built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/2?lang=eng&id=19-20#p19'
    },
    {
        id: 'nt-18',
        volume: 'New Testament',
        reference: '2 Thessalonians 2:1–3',
        text: 'The day of Christ … shall not come, except there come a falling away first.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/2-thes/2?lang=eng&id=1-3#p1'
    },
    {
        id: 'nt-19',
        volume: 'New Testament',
        reference: '2 Timothy 3:15–17',
        text: 'The holy scriptures … are able to make thee wise unto salvation.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/2-tim/3?lang=eng&id=15-17#p15'
    },
    {
        id: 'nt-20',
        volume: 'New Testament',
        reference: 'Hebrews 12:9',
        text: 'Heavenly Father is “the Father of spirits.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/heb/12?lang=eng&id=9#p9'
    },
    {
        id: 'nt-21',
        volume: 'New Testament',
        reference: 'James 1:5–6',
        text: 'If any of you lack wisdom, let him ask of God.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/james/1?lang=eng&id=5-6#p5'
    },
    {
        id: 'nt-22',
        volume: 'New Testament',
        reference: 'James 2:17–18',
        text: 'Faith, if it hath not works, is dead.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/james/2?lang=eng&id=17-18#p17'
    },
    {
        id: 'nt-23',
        volume: 'New Testament',
        reference: '1 Peter 4:6',
        text: 'The gospel [was] preached also to them that are dead.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/1-pet/4?lang=eng&id=6#p6'
    },
    {
        id: 'nt-24',
        volume: 'New Testament',
        reference: 'Revelation 20:12',
        text: 'And the dead were judged … according to their works.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/rev/20?lang=eng&id=12#p12'
    },

    // BOOK OF MORMON
    {
        id: 'bom-1',
        volume: 'Book of Mormon',
        reference: '1 Nephi 3:7',
        text: 'I will go and do the things which the Lord hath commanded.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/3?lang=eng&id=7#p7'
    },
    {
        id: 'bom-2',
        volume: 'Book of Mormon',
        reference: '2 Nephi 2:25',
        text: 'Adam fell that men might be; and men are, that they might have joy.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=eng&id=25#p25'
    },
    {
        id: 'bom-3',
        volume: 'Book of Mormon',
        reference: '2 Nephi 2:27',
        text: 'They are free to choose liberty and eternal life … or … captivity and death.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=eng&id=27#p27'
    },
    {
        id: 'bom-4',
        volume: 'Book of Mormon',
        reference: '2 Nephi 26:33',
        text: 'All are alike unto God.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/26?lang=eng&id=33#p33'
    },
    {
        id: 'bom-5',
        volume: 'Book of Mormon',
        reference: '2 Nephi 28:30',
        text: 'God “will give unto the children of men line upon line, precept upon precept.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/28?lang=eng&id=30#p30'
    },
    {
        id: 'bom-6',
        volume: 'Book of Mormon',
        reference: '2 Nephi 32:3',
        text: 'Feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should do.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32?lang=eng&id=3#p3'
    },
    {
        id: 'bom-7',
        volume: 'Book of Mormon',
        reference: '2 Nephi 32:8–9',
        text: 'Ye must pray always.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32?lang=eng&id=8-9#p8'
    },
    {
        id: 'bom-8',
        volume: 'Book of Mormon',
        reference: 'Mosiah 2:17',
        text: 'When ye are in the service of your fellow beings ye are only in the service of your God.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng&id=17#p17'
    },
    {
        id: 'bom-9',
        volume: 'Book of Mormon',
        reference: 'Mosiah 2:41',
        text: 'Those that keep the commandments of God … are blessed in all things.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng&id=41#p41'
    },
    {
        id: 'bom-10',
        volume: 'Book of Mormon',
        reference: 'Mosiah 3:19',
        text: '[Put] off the natural man and [become] a saint through the atonement of Christ the Lord.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/3?lang=eng&id=19#p19'
    },
    {
        id: 'bom-11',
        volume: 'Book of Mormon',
        reference: 'Mosiah 4:9',
        text: 'Believe in God; … believe that he has all wisdom.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?lang=eng&id=9#p9'
    },
    {
        id: 'bom-12',
        volume: 'Book of Mormon',
        reference: 'Mosiah 18:8–10',
        text: 'Be “baptized in the name of the Lord, as a witness … that ye have entered into a covenant with him.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/18?lang=eng&id=8-10#p8'
    },
    {
        id: 'bom-13',
        volume: 'Book of Mormon',
        reference: 'Alma 7:11–13',
        text: 'And he shall go forth, suffering pains and afflictions and temptations of every kind.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/7?lang=eng&id=11-13#p11'
    },
    {
        id: 'bom-14',
        volume: 'Book of Mormon',
        reference: 'Alma 34:9–10',
        text: 'There must be an atonement made, … an infinite and eternal sacrifice.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=eng&id=9-10#p9'
    },
    {
        id: 'bom-15',
        volume: 'Book of Mormon',
        reference: 'Alma 39:9',
        text: 'Go no more after the lusts of your eyes.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/39?lang=eng&id=9#p9'
    },
    {
        id: 'bom-16',
        volume: 'Book of Mormon',
        reference: 'Alma 41:10',
        text: 'Wickedness never was happiness.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/41?lang=eng&id=10#p10'
    },
    {
        id: 'bom-17',
        volume: 'Book of Mormon',
        reference: 'Helaman 5:12',
        text: 'It is upon the rock of our Redeemer … that ye must build your foundation.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/5?lang=eng&id=12#p12'
    },
    {
        id: 'bom-18',
        volume: 'Book of Mormon',
        reference: '3 Nephi 11:10–11',
        text: 'I have suffered the will of the Father in all things from the beginning.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/11?lang=eng&id=10-11#p10'
    },
    {
        id: 'bom-19',
        volume: 'Book of Mormon',
        reference: '3 Nephi 12:48',
        text: 'Be perfect even as I, or your Father who is in heaven is perfect.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/12?lang=eng&id=48#p48'
    },
    {
        id: 'bom-20',
        volume: 'Book of Mormon',
        reference: '3 Nephi 27:20',
        text: 'Come unto me and be baptized … that ye may be sanctified by the reception of the Holy Ghost.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/27?lang=eng&id=20#p20'
    },
    {
        id: 'bom-21',
        volume: 'Book of Mormon',
        reference: 'Ether 12:6',
        text: 'Ye receive no witness until after the trial of your faith.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/eth/12?lang=eng&id=6#p6'
    },
    {
        id: 'bom-22',
        volume: 'Book of Mormon',
        reference: 'Ether 12:27',
        text: 'If men come unto me … then will I make weak things become strong unto them.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/eth/12?lang=eng&id=27#p27'
    },
    {
        id: 'bom-23',
        volume: 'Book of Mormon',
        reference: 'Moroni 7:45–48',
        text: 'Charity is the pure love of Christ.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/7?lang=eng&id=45-48#p45'
    },
    {
        id: 'bom-24',
        volume: 'Book of Mormon',
        reference: 'Moroni 10:4–5',
        text: 'Ask with a sincere heart, with real intent, having faith in Christ … [and] by the power of the Holy Ghost ye may know the truth of all things.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/10?lang=eng&id=4-5#p4'
    },

    // DOCTRINE AND COVENANTS
    {
        id: 'dc-1',
        volume: 'Doctrine and Covenants',
        reference: 'Joseph Smith—History 1:15–20',
        text: 'Joseph Smith “saw two Personages, whose brightness and glory defy all description.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/pgp/js-h/1?lang=eng&id=15-20#p15'
    },
    {
        id: 'dc-2',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 1:30',
        text: 'The only true and living church.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/1?lang=eng&id=30#p30'
    },
    {
        id: 'dc-3',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 1:37–38',
        text: 'Whether by mine own voice or by the voice of my servants, it is the same.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/1?lang=eng&id=37-38#p37'
    },
    {
        id: 'dc-4',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 6:36',
        text: 'Look unto me in every thought; doubt not, fear not.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/6?lang=eng&id=36#p36'
    },
    {
        id: 'dc-5',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 8:2–3',
        text: 'I will tell you in your mind and in your heart, by the Holy Ghost.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/8?lang=eng&id=2-3#p2'
    },
    {
        id: 'dc-6',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 13:1',
        text: 'The Aaronic Priesthood “holds the keys of the ministering of angels, and of the gospel of repentance, and of baptism.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/13?lang=eng&id=1#p1'
    },
    {
        id: 'dc-7',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 18:10–11',
        text: 'The worth of souls is great in the sight of God.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/18?lang=eng&id=10-11#p10'
    },
    {
        id: 'dc-8',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 18:15–16',
        text: 'How great will be your joy if you should bring many souls unto me!',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/18?lang=eng&id=15-16#p15'
    },
    {
        id: 'dc-9',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 19:16–19',
        text: 'I, [Jesus Christ], have suffered these things for all.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19?lang=eng&id=16-19#p16'
    },
    {
        id: 'dc-10',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 21:4–6',
        text: 'The prophet’s “word ye shall receive, as if from mine own mouth.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/21?lang=eng&id=4-6#p4'
    },
    {
        id: 'dc-11',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 29:10–11',
        text: 'I will reveal myself from heaven with power and great glory … and dwell in righteousness with men on earth a thousand years.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/29?lang=eng&id=10-11#p10'
    },
    {
        id: 'dc-12',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 49:15–17',
        text: 'Marriage is ordained of God.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/49?lang=eng&id=15-17#p15'
    },
    {
        id: 'dc-13',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 58:42–43',
        text: 'He who has repented of his sins, the same is forgiven.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58?lang=eng&id=42-43#p42'
    },
    {
        id: 'dc-14',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 64:9–11',
        text: 'Of you it is required to forgive all men.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/64?lang=eng&id=9-11#p9'
    },
    {
        id: 'dc-15',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 76:22–24',
        text: 'By [Jesus Christ] the worlds are and were created.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/76?lang=eng&id=22-24#p22'
    },
    {
        id: 'dc-16',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 82:10',
        text: 'I, the Lord, am bound when ye do what I say.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/82?lang=eng&id=10#p10'
    },
    {
        id: 'dc-17',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 84:20–22',
        text: 'In the ordinances thereof, the power of godliness is manifest.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/84?lang=eng&id=20-22#p20'
    },
    {
        id: 'dc-18',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 88:118',
        text: 'Seek learning, even by study and also by faith.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88?lang=eng&id=118#p118'
    },
    {
        id: 'dc-19',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 89:18–21',
        text: 'The blessings of the Word of Wisdom',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/89?lang=eng&id=18-21#p18'
    },
    {
        id: 'dc-20',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 107:8',
        text: 'The Melchizedek Priesthood … has power and authority … to administer in spiritual things.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/107?lang=eng&id=8#p8'
    },
    {
        id: 'dc-21',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 121:36, 41–42',
        text: 'The rights of the priesthood … cannot be controlled nor handled only on the principles of righteousness.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121?lang=eng&id=36#p36'
    },
    {
        id: 'dc-22',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 130:22–23',
        text: 'The Father has a body of flesh and bones … ; the Son also; but the Holy Ghost … is a personage of Spirit.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/130?lang=eng&id=22-23#p22'
    },
    {
        id: 'dc-23',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 131:1–4',
        text: 'The new and everlasting covenant of marriage.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/131?lang=eng&id=1-4#p1'
    },
    {
        id: 'dc-24',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 135:3',
        text: 'Joseph Smith “brought forth the Book of Mormon, which he translated by the gift and power of God.”',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/135?lang=eng&id=3#p3'
    },
    {
        id: 'ot-25',
        volume: 'Old Testament',
        reference: 'Isaiah 55:8–9',
        text: 'For my thoughts are not your thoughts, neither are your ways my ways, saith the Lord.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/55?lang=eng&id=8-9#p8'
    },
    {
        id: 'nt-25',
        volume: 'New Testament',
        reference: '1 John 4:19',
        text: 'We love him, because he first loved us.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/1-jn/4?lang=eng&id=19#p19'
    },
    {
        id: 'bom-25',
        volume: 'Book of Mormon',
        reference: 'Moroni 8:25',
        text: 'And the first fruits of repentance is baptism.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/8?lang=eng&id=25#p25'
    },
    {
        id: 'dc-25',
        volume: 'Doctrine and Covenants',
        reference: 'Doctrine and Covenants 133:37',
        text: 'And this gospel shall be preached unto every nation, and kindred, and tongue, and people.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/133?lang=eng&id=37#p37'
    }
];

// MONGOLIAN TRANSLATIONS


// MONGOLIAN TRANSLATIONS
const mongolianMasteryData: MasteryScripture[] = [
    // OLD TESTAMENT
    { id: 'ot-1', volume: 'Old Testament', reference: 'Мосе 1:39', text: 'Энэ бол хүний мөнх бус байдал ба мөнх амьдралыг бий болгох миний ажил ба алдар суу юм.', url: 'https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1?lang=mon&id=39#p39' },
    { id: 'ot-2', volume: 'Old Testament', reference: 'Мосе 7:18', text: 'Их Эзэн Өөрийн хүмүүсийг Сион хэмээн дуудсан, учир нь тэд нэг зүрх сэтгэлтэй, нэг санаатай байв.', url: 'https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/7?lang=mon&id=18#p18' },
    { id: 'ot-3', volume: 'Old Testament', reference: 'Абрахам 2:9–11', text: 'Их Эзэн Абрахамд түүний үр удам "энэ тохинууллыг болон Санваарыг бүх үндэстэнд хүргэнэ" хэмээн амласан.', url: 'https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/2?lang=mon&id=9-11#p9' },
    { id: 'ot-4', volume: 'Old Testament', reference: 'Абрахам 3:22–23', text: 'Бид сүнс байхдаа "дэлхий бий болохоос өмнө зохион байгуулагдсан."', url: 'https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=mon&id=22-23#p22' },
    { id: 'ot-5', volume: 'Old Testament', reference: 'Эхлэл 1:26–27', text: 'Бурхан хүнийг Өөрийнхөө дүрээр бүтээсэн.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1?lang=mon&id=26-27#p26' },
    { id: 'ot-6', volume: 'Old Testament', reference: 'Эхлэл 2:24', text: 'Хүн … эхнэртэйгээ нийлж тэд нэг бие болно.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/gen/2?lang=mon&id=24#p24' },
    { id: 'ot-7', volume: 'Old Testament', reference: 'Эхлэл 39:9', text: 'Би яаж ингэж их бузар муу зүйлийг хийж, Бурханы эсрэг нүгэл үйлдэж чадах билээ?', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/gen/39?lang=mon&id=9#p9' },
    { id: 'ot-8', volume: 'Old Testament', reference: 'Египетээс гарсан нь 20:3–17', text: 'Арван зарлиг', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/ex/20?lang=mon&id=3-17#p3' },
    { id: 'ot-9', volume: 'Old Testament', reference: 'Иошуа 24:15', text: 'Хэнд үйлчлэхээ энэ өдөр сонгогтун.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/josh/24?lang=mon&id=15#p15' },
    { id: 'ot-10', volume: 'Old Testament', reference: 'Дуулал 24:3–4', text: 'Түүний ариун газарт хэн зогсох вэ? Цэвэр гартай, ариун зүрх сэтгэлтэй хүн.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/ps/24?lang=mon&id=3-4#p3' },
    { id: 'ot-11', volume: 'Old Testament', reference: 'Сургаалт үгс 3:5–6', text: 'Бүхий л зүрхээрээ Их Эзэнд итгэ … мөн Тэр замуудыг чинь чиглүүлнэ.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/prov/3?lang=mon&id=5-6#p5' },
    { id: 'ot-12', volume: 'Old Testament', reference: 'Исаиа 1:18', text: 'Нүглүүд чинь улаан хүрэн адил боловч цас шиг цагаан болно.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/1?lang=mon&id=18#p18' },
    { id: 'ot-13', volume: 'Old Testament', reference: 'Исаиа 5:20', text: 'Мууг сайн, сайныг муу гэж дуудагчдад халаг.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/5?lang=mon&id=20#p20' },
    { id: 'ot-14', volume: 'Old Testament', reference: 'Исаиа 29:13–14', text: 'Их Эзэн гайхамшигт бөгөөд хачин зүйлийг хийнэ.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/29?lang=mon&id=13-14#p13' },
    { id: 'ot-15', volume: 'Old Testament', reference: 'Исаиа 53:3–5', text: 'Тэрбээр жигшүүлсэн бөгөөд хүмүүст орхигдсон байна … Тэрбээр бидний зовлонг үүрсэн.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/53?lang=mon&id=3-5#p3' },
    { id: 'ot-16', volume: 'Old Testament', reference: 'Иеремиа 1:4–5', text: 'Чамайг хэвлийд бүрдэхээс өмнө Би чамайг мэдэж байсан.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/jer/1?lang=mon&id=4-5#p4' },
    { id: 'ot-17', volume: 'Old Testament', reference: 'Езекиел 37:15–20', text: 'Иудагийн мод ба Иосефын мод нэг болно.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/ezek/37?lang=mon&id=15-20#p15' },
    { id: 'ot-18', volume: 'Old Testament', reference: 'Амос 3:7', text: 'Хүндэт Их Эзэн Бурхан зарц бошиглогчдод нууцаа илчлэхгүйгээр юу ч хийхгүй.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/amos/3?lang=mon&id=7#p7' },
    { id: 'ot-19', volume: 'Old Testament', reference: 'Малахи 3:8–10', text: 'Бүх аравны нэгийг агуулах газарт авчир.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/mal/3?lang=mon&id=8-10#p8' },
    { id: 'ot-20', volume: 'Old Testament', reference: 'Малахи 4:5–6', text: 'Их Эзэний агуу бөгөөд аймшигтай өдрийн өмнө Би Елиа бошиглогчийг илгээнэ.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/mal/4?lang=mon&id=5-6#p5' },

    // NEW TESTAMENT
    { id: 'nt-1', volume: 'New Testament', reference: 'Матай 5:14–16', text: 'Та нар бол дэлхийн гэрэл. Гэрлээ хүмүүсийн өмнө тийн гэрэлтүүл.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/5?lang=mon&id=14-16#p14' },
    { id: 'nt-2', volume: 'New Testament', reference: 'Матай 6:24', text: 'Хоёр эзэнд хэн ч зэрэг үйлчилж үл чадна.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/6?lang=mon&id=24#p24' },
    { id: 'nt-3', volume: 'New Testament', reference: 'Матай 11:28–30', text: 'Хөдөлмөрлөж, ачаа дарамттай байгаа бүх хүмүүс ээ, Над дээр ирэгтүн. Би та нарыг амраая.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/11?lang=mon&id=28-30#p28' },
    { id: 'nt-4', volume: 'New Testament', reference: 'Матай 16:15–19', text: 'Петр: Та бол Христ, амьд Бурханы Хүү гэж хариулав.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/16?lang=mon&id=15-19#p15' },
    { id: 'nt-5', volume: 'New Testament', reference: 'Матай 22:36–39', text: 'Чи Бурхан Их Эзэнээ бүхий л зүрх сэтгэлээрээ хайрла.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/22?lang=mon&id=36-39#p36' },
    { id: 'nt-6', volume: 'New Testament', reference: 'Матай 25:40', text: 'Та нар эдгээр ах дүүсийн маань хамгийн өчүүхэн нэгд нь юм хийсэн бол, Надад хийсэн хэрэг.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/matt/25?lang=mon&id=40#p40' },
    { id: 'nt-7', volume: 'New Testament', reference: 'Лук 22:19–20', text: 'Энэ бол та нарын төлөө өгөх миний бие мөн. Энэ аяга нь та нарын төлөө асгагдах миний цусан дахь шинэ гэрээ.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/luke/22?lang=mon&id=19-20#p19' },
    { id: 'nt-8', volume: 'New Testament', reference: 'Иохан 3:5', text: 'Хүн ус болон Сүнснээс төрөхгүй бол Бурханы хаанчлалд орж үл чадна.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/john/3?lang=mon&id=5#p5' },
    { id: 'nt-9', volume: 'New Testament', reference: 'Иохан 7:17', text: 'Хэн Түүний хүслийг биелүүлэхийг хүснэ, тэр хүн энэ сургаал Бурханаас уу гэдгийг мэдэх болно.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/john/7?lang=mon&id=17#p17' },
    { id: 'nt-10', volume: 'New Testament', reference: 'Иохан 10:16', text: 'Энэхэн хашаанд үл багтах Надад бусад хонин бас бий.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/john/10?lang=mon&id=16#p16' },
    { id: 'nt-11', volume: 'New Testament', reference: 'Иохан 14:6', text: 'Би бол зам, үнэн, амь мөн.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/john/14?lang=mon&id=6#p6' },
    { id: 'nt-12', volume: 'New Testament', reference: 'Иохан 14:15', text: 'Хэрэв та нар Намайг хайрладаг бол зарлигуудыг минь сахиагтун.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/john/14?lang=mon&id=15#p15' },
    { id: 'nt-13', volume: 'New Testament', reference: 'Иохан 15:16', text: 'Та нар Намайг сонгосон бус, харин Би та нарыг сонгосон.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/john/15?lang=mon&id=16#p16' },
    { id: 'nt-14', volume: 'New Testament', reference: 'Иохан 17:3', text: 'Цорын ганц жинхэнэ Бурхан Таныг болон Таны илгээсэн Есүс Христийг мэдэх нь мөнх амьдрал мөн.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/john/17?lang=mon&id=3#p3' },
    { id: 'nt-15', volume: 'New Testament', reference: 'Үйлс 2:36–38', text: 'Наманчилж, Есүс Христийн нэрээр баптисм хүрт.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/acts/2?lang=mon&id=36-38#p36' },
    { id: 'nt-16', volume: 'New Testament', reference: 'Үйлс 3:19–21', text: 'Бүх зүйлийн сэргээлт.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/acts/3?lang=mon&id=19-21#p19' },
    { id: 'nt-17', volume: 'New Testament', reference: 'Ром 1:16', text: 'Би сайн мэдээнд ичдэггүй; учир нь итгэдэг хүн бүрийг аврахад Бурханы хүч юм.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/rom/1?lang=mon&id=16#p16' },
    { id: 'nt-18', volume: 'New Testament', reference: 'Ром 8:16–17', text: 'Бид Бурханы хүүхдүүд … Христтэй хамт өв залгамжлагчид мөн.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/rom/8?lang=mon&id=16-17#p16' },
    { id: 'nt-19', volume: 'New Testament', reference: '1 Коринт 6:19–20', text: 'Та нарын бие бол Ариун Сүнсний сүм юм.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/6?lang=mon&id=19-20#p19' },
    { id: 'nt-20', volume: 'New Testament', reference: '1 Коринт 15:20–22', text: 'Христ үхэгсдээс амилуулагдсан, нойрссон хүмүүсийн анхны үр жимс мөн.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/15?lang=mon&id=20-22#p20' },
    { id: 'nt-21', volume: 'New Testament', reference: '1 Коринт 15:29', text: 'Үхэгсдийн төлөө баптисм хүртэгсэд юу хийх вэ?', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/15?lang=mon&id=29#p29' },
    { id: 'nt-22', volume: 'New Testament', reference: '1 Коринт 15:40–42', text: 'Тэнгэрлэг биетүүд ба дэлхийн биетүүд бий … амилалт дахь алдар.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/15?lang=mon&id=40-42#p40' },
    { id: 'nt-23', volume: 'New Testament', reference: 'Ефес 4:11–14', text: 'Тэрээр … элч нарыг, … бошиглогчдыг … гэгээнтнүүдийг төгс болгохын тулд', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/4?lang=mon&id=11-14#p11' },
    { id: 'nt-24', volume: 'New Testament', reference: 'Илчлэлт 20:12', text: 'Үхэгсэд … үйлсийнхээ дагуу шүүгдэв.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/rev/20?lang=mon&id=12#p12' },

    // BOOK OF MORMON
    { id: 'bom-1', volume: 'Book of Mormon', reference: '1 Нифай 3:7', text: 'Их Эзэний зарласан зүйлүүдийг хийхээр би одъё.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/3?lang=mon&id=7#p7' },
    { id: 'bom-2', volume: 'Book of Mormon', reference: '2 Нифай 2:25', text: 'Хүмүүс бий болохын тулд Адам уначихсан; мөн хүмүүс баяр баясгалантай байхын тулд оршин буй.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=mon&id=25#p25' },
    { id: 'bom-3', volume: 'Book of Mormon', reference: '2 Нифай 2:27', text: 'Тэд эрх чөлөө ба мөнх амьдралыг … эсвэл … боолчлол ба үхлийг сонгох эрхтэй.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=mon&id=27#p27' },
    { id: 'bom-4', volume: 'Book of Mormon', reference: '2 Нифай 26:33', text: 'Бүгд Бурханы хувьд адилхан.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/26?lang=mon&id=33#p33' },
    { id: 'bom-5', volume: 'Book of Mormon', reference: '2 Нифай 28:30', text: 'Бурхан "хүмүүний хүүхдүүдэд мөр мөрөөр, зааварлал заавраар өгнө."', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/28?lang=mon&id=30#p30' },
    { id: 'bom-6', volume: 'Book of Mormon', reference: '2 Нифай 32:3', text: 'Христийн үгсийг наршин ид, учир нь Христийн үгс та нарын хийх ёстой бүх зүйлийг хэлж өгнө.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32?lang=mon&id=3#p3' },
    { id: 'bom-7', volume: 'Book of Mormon', reference: '2 Нифай 32:8–9', text: 'Та нар үргэлж залбирах ёстой.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32?lang=mon&id=8-9#p8' },
    { id: 'bom-8', volume: 'Book of Mormon', reference: 'Мозая 2:17', text: 'Хамтран зүтгэгсдийнхээ үйлчилгээнд байхдаа та нар зөвхөн Бурханыхаа үйлчилгээнд байна.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=mon&id=17#p17' },
    { id: 'bom-9', volume: 'Book of Mormon', reference: 'Мозая 2:41', text: 'Бурханы зарлигуудыг сахигчид бүх зүйлд ивээлтэй.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=mon&id=41#p41' },
    { id: 'bom-10', volume: 'Book of Mormon', reference: 'Мозая 3:19', text: 'Жам ёсны хүнийг хая, мөн Их Эзэн Христийн цагаатгалаар дамжуулан гэгээнтэн бол.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/3?lang=mon&id=19#p19' },
    { id: 'bom-11', volume: 'Book of Mormon', reference: 'Мозая 4:9', text: 'Бурханд итгэ; … Тэр бүх мэргэн ухаантай гэдэгт итгэ.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?lang=mon&id=9#p9' },
    { id: 'bom-12', volume: 'Book of Mormon', reference: 'Мозая 18:8–10', text: '"Их Эзэний нэрээр баптисм хүрт, Түүнтэй гэрээ байгуулсныхаа гэрч болж."', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/18?lang=mon&id=8-10#p8' },
    { id: 'bom-13', volume: 'Book of Mormon', reference: 'Алма 7:11–13', text: 'Тэрээр бүх төрлийн өвчин зовлон, сорилт зүдгүүрийг тэвчин туулж одно.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/7?lang=mon&id=11-13#p11' },
    { id: 'bom-14', volume: 'Book of Mormon', reference: 'Алма 34:9–10', text: 'Цагаатгал хийгдэх ёстой, … хязгааргүй бөгөөд мөнхийн тахил.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=mon&id=9-10#p9' },
    { id: 'bom-15', volume: 'Book of Mormon', reference: 'Алма 39:9', text: 'Нүдний хүслээс цаашид бүү дага.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/39?lang=mon&id=9#p9' },
    { id: 'bom-16', volume: 'Book of Mormon', reference: 'Алма 41:10', text: 'Ёс бус нь хэзээ ч аз жаргал байсангүй.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/41?lang=mon&id=10#p10' },
    { id: 'bom-17', volume: 'Book of Mormon', reference: 'Хиламан 5:12', text: 'Та нар суурийг Цагаатгагч Их Эзэний хадан дээр босгох ёстой.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/5?lang=mon&id=12#p12' },
    { id: 'bom-18', volume: 'Book of Mormon', reference: '3 Нифай 11:10–11', text: 'Эхнээсээ бүх зүйлд Эцэгийн хүслийг Би даган зовсон.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/11?lang=mon&id=10-11#p10' },
    { id: 'bom-19', volume: 'Book of Mormon', reference: '3 Нифай 12:48', text: 'Миний адил, эсвэл тэнгэр дэх Эцэгийн адил төгс бай.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/12?lang=mon&id=48#p48' },
    { id: 'bom-20', volume: 'Book of Mormon', reference: '3 Нифай 27:20', text: 'Над дээр ирж баптисм хүртэгтүн … Ариун Сүнсний хүлээн авалтаар ариусгагд.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/27?lang=mon&id=20#p20' },
    { id: 'bom-21', volume: 'Book of Mormon', reference: 'Етер 12:6', text: 'Итгэлийн чинь шалгуурын дараа гэрчлэлийг хүлээн авна.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=mon&id=6#p6' },
    { id: 'bom-22', volume: 'Book of Mormon', reference: 'Етер 12:27', text: 'Хэрэв хүмүүс Надад ирвэл … сул зүйлсийг хүчтэй болгоно.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=mon&id=27#p27' },
    { id: 'bom-23', volume: 'Book of Mormon', reference: 'Моронай 7:45–48', text: 'Энэрэл бол Христийн цэвэр хайр юм.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/7?lang=mon&id=45-48#p45' },
    { id: 'bom-24', volume: 'Book of Mormon', reference: 'Моронай 10:4–5', text: 'Чин сэтгэлээсээ, үнэн зорилгоор, Христэд итгэлтэйгээр асуу … Ариун Сүнсний хүчээр та бүх зүйлийн үнэнийг мэдэж чадна.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/10?lang=mon&id=4-5#p4' },

    // DOCTRINE AND COVENANTS
    {
        id: 'dc-1',
        volume: 'Doctrine and Covenants',
        reference: 'Иосеф Смитийн Түүх 1:15–20',
        text: 'Иосеф Смит "гэрэл цэлмэг алдар суунаас давамгай хоёр Хүнийг" харжээ.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/pgp/js-h/1?lang=mon&id=15-20#p15'
    },
    {
        id: 'dc-2',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 1:30',
        text: 'Цорын ганц үнэн бөгөөд амьд сүм.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/1?lang=mon&id=30#p30'
    },
    {
        id: 'dc-3',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 1:37–38',
        text: 'Миний өөрийн дуу хоолойгоор ч бай, зарц нарын минь дуу хоолойгоор ч бай, энэ нь адилхан юм.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/1?lang=mon&id=37-38#p37'
    },
    {
        id: 'dc-4',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 6:36',
        text: 'Бүх бодол сэтгэлдээ Над руу хар; бүү эргэлз, бүү ай.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/6?lang=mon&id=36#p36'
    },
    {
        id: 'dc-5',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 8:2–3',
        text: 'Би чиний оюун санаанд ба зүрх сэтгэлд чинь, Ариун Сүнсээр хэлнэ.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/8?lang=mon&id=2-3#p2'
    },
    {
        id: 'dc-6',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 13:1',
        text: 'Аароны санваар нь "тэнгэр элч нарын тохинуулал, наманчлалын сайн мэдээ, баптисмын түлхүүрүүдийг атгадаг."',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/13?lang=mon&id=1#p1'
    },
    {
        id: 'dc-7',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 18:10–11',
        text: 'Сүнсний үнэ цэнэ Бурханы мэлмийд агуу их юм.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/18?lang=mon&id=10-11#p10'
    },
    {
        id: 'dc-8',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 18:15–16',
        text: 'Хэрэв та олон сүнсийг Над руу авчирвал баяр хөөр чинь хичнээн их байх вэ!',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/18?lang=mon&id=15-16#p15'
    },
    {
        id: 'dc-9',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 19:16–19',
        text: 'Би [Есүс Христ] бүхний төлөө эдгээр зүйлийг тэвчсэн.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/19?lang=mon&id=16-19#p16'
    },
    {
        id: 'dc-10',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 21:4–6',
        text: 'Бошиглогчийн "үгийг та нар миний амнаас ирсэн мэт хүлээн ав."',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/21?lang=mon&id=4-6#p4'
    },
    {
        id: 'dc-11',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 29:10–11',
        text: 'Би хүч ба их алдар суугаар тэнгэрээс Өөрийгөө илчилнэ … мөн нэг мянган жилийн турш хүмүүсийн дунд зөвт байдлаар оршино.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/29?lang=mon&id=10-11#p10'
    },
    {
        id: 'dc-12',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 49:15–17',
        text: 'Гэрлэлт Бурханаас тогтоогдсон.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/49?lang=mon&id=15-17#p15'
    },
    {
        id: 'dc-13',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 58:42–43',
        text: 'Нүглээсээ наманчилсан хүн уучлагдана.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58?lang=mon&id=42-43#p42'
    },
    {
        id: 'dc-14',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 64:9–11',
        text: 'Бүх хүмүүсийг уучлах нь та нараас шаардагдана.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/64?lang=mon&id=9-11#p9'
    },
    {
        id: 'dc-15',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 76:22–24',
        text: '[Есүс Христээр] ертөнцүүд бий болсон бөгөөд бий болж байна.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/76?lang=mon&id=22-24#p22'
    },
    {
        id: 'dc-16',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 82:10',
        text: 'Их Эзэн Би, та нар миний хэлснийг хийвэл, үүрэг хүлээнэ.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/82?lang=mon&id=10#p10'
    },
    {
        id: 'dc-17',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 84:20–22',
        text: 'Ёслолуудад нь бурханлаг чанарын хүч илэрхийлэгддэг.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/84?lang=mon&id=20-22#p20'
    },
    {
        id: 'dc-18',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 88:118',
        text: 'Суралцахыг хичээ, бүр суралцахаар ч мөн итгэлээр ч.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88?lang=mon&id=118#p118'
    },
    {
        id: 'dc-19',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 89:18–21',
        text: 'Мэргэн ухааны үгийн адислалууд',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/89?lang=mon&id=18-21#p18'
    },
    {
        id: 'dc-20',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 107:8',
        text: 'Мелкизедек санваар нь … сүнслэг зүйлүүдийг удирдах хүч чадвар, эрх мэдэлтэй.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/107?lang=mon&id=8#p8'
    },
    {
        id: 'dc-21',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 121:36, 41–42',
        text: 'Санваарын эрхүүд … зөвхөн зөвт байдлын зарчмууд дээр л хянагдаж, удирдагдаж чадна.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121?lang=mon&id=36#p36'
    },
    {
        id: 'dc-22',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 130:22–23',
        text: 'Эцэгт мах ясан бие бий … Хүүд ч бас; харин Ариун Сүнс бол … Сүнс Хүн юм.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/130?lang=mon&id=22-23#p22'
    },
    {
        id: 'dc-23',
        volume: 'Doctrine and Covenants',
        reference: 'Сургаал ба Гэрээ 131:1–4',
        text: 'Гэрлэлтийн шинэ бөгөөд үүрдийн гэрээ.',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/131?lang=mon&id=1-4#p1'
    },
    { id: 'dc-24', volume: 'Doctrine and Covenants', reference: 'Сургаал ба Гэрээ 135:3', text: 'Иосеф Смит "Мормоны номыг, Бурханы бэлэг ба хүчээр орчуулсан."', url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/135?lang=mon&id=3#p3' },
    { id: 'ot-25', volume: 'Old Testament', reference: 'Исаиа 55:8–9', text: 'Учир нь Миний бодол санаа та нарынх биш, та нарын зам Минийх биш гэж Эзэн айлдаж байна.', url: 'https://www.churchofjesuschrist.org/study/scriptures/ot/isa/55?lang=mon&id=8-9#p8' },
    { id: 'nt-25', volume: 'New Testament', reference: '1 Иохан 4:19', text: 'Тэр анх биднийг хайрласан учраас бид Түүнийг хайрладаг.', url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/1-jn/4?lang=mon&id=19#p19' },
    { id: 'bom-25', volume: 'Book of Mormon', reference: 'Моронай 8:25', text: 'Наманчлалын анхны үр жимс бол баптисм юм.', url: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/8?lang=mon&id=25#p25' },
    { id: 'dc-25', volume: 'Doctrine and Covenants', reference: 'Сургаал ба Гэрээ 133:37', text: 'Мөн энэ сайн мэдээ бүх үндэстэн, ястан, хэлтэн ба хүмүүст номлогдох болно.', url: 'https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/133?lang=mon&id=37#p37' }
];

export type Language = 'en' | 'mn';

export const getMasteryData = (lang: Language): MasteryScripture[] => {
    return lang === 'mn' ? mongolianMasteryData : masteryData;
};
