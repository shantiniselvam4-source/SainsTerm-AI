const scienceTerms = [
    {
        title: "Biji Benih Bercambah",
        category: "Tumbuhan",
        desc: "Proses apabila biji benih mula tumbuh menjadi anak pokok apabila mendapat air, udara dan keadaan yang sesuai.",
        img:"images/biji benih.jpeg"
    },
    {
        title: "Bulu Pelepah",
        category: "Haiwan",
        desc: "Bahagian yang menutupi badan burung dan membantu burung terbang serta melindungi badannya.",
        img: "images/bulu pelepah.jpeg"
    },
    {
        title: "Paruh",
        category: "Haiwan",
        desc: "Bahagian keras pada mulut burung yang digunakan untuk makan dan mengambil makanan.",
        img: "images/paruh.jpeg"
    },
    {
        title: "Sesungut",
        category: "Haiwan",
        desc: "Bahagian pada kepala sesetengah haiwan yang digunakan untuk mengesan persekitaran.",
        img: "images/Sesungut.jpeg"
    },
    {
        title: "Kepak",
        category: "Haiwan",
        desc: "Bahagian sayap yang membantu burung atau serangga bergerak dan terbang.",
        img: "images/kepak.jpeg"
    },
    {
        title: "Kaki Selaput Renang",
        category: "Haiwan",
        desc: "Kaki yang mempunyai selaput di antara jari dan membantu haiwan berenang.",
        img: "images/Kaki Selaput Renang.jpeg"
    },
    {
        title: "Sirip",
        category: "Haiwan",
        desc: "Bahagian badan ikan yang membantu ikan berenang dan mengawal arah pergerakan.",
        img: "images/sirip.jpeg"
    },
    {
        title: "Sisik",
        category: "Haiwan",
        desc: "Lapisan keras yang melindungi badan ikan dan sesetengah haiwan lain.",
        img: "images/Sisik.jpeg"
    },
    {
        title: "Sumbu",
        category: "Bahan",
        desc: "Bahagian pada lilin yang membantu api terus menyala.",
        img: "images/Sumbu.jpeg"
    },
    {
        title: "Pokok Keembung",
        category: "Tumbuhan",
        desc: "Tumbuhan berbunga yang sering digunakan dalam aktiviti pemerhatian sains.",
        img: "images/Pokok Keembung.jpeg"
    },
    {
        title: "Urat Daun Jejala",
        category: "Tumbuhan",
        desc: "Corak urat daun yang bercabang dan bersambung seperti jaring.",
        img: "images/Urat Daun Jejala.jpeg"
    },
    {
        title: "Berakar Tunjang",
        category: "Tumbuhan",
        desc: "Sistem akar yang mempunyai satu akar utama yang besar dan panjang.",
        img: "images/Berakar Tunjang.jpeg"
    },
    {
        title: "Pokok Kemuncup",
        category: "Tumbuhan",
        desc: "Tumbuhan yang daunnya boleh menguncup apabila disentuh.",
        img: "images/Pokok Kemuncup.jpeg"
    },
    {
        title: "Kemahiran Manipulatif",
        category: "Kemahiran Saintifik",
        desc: "Kemahiran menggunakan alatan dan bahan sains dengan betul dan selamat.",
        img: "images/Kemahiran Manipulatif.jpeg"
    },
    {
        title: "Kemahiran Psikomotor",
        category: "Kemahiran Saintifik",
        desc: "Kemahiran melakukan aktiviti menggunakan anggota badan dengan baik.",
        img: "images/Kemahiran Psikomotor.jpeg"
    },
    {
        title: "Kemahiran Memerhati",
        category: "Kemahiran Saintifik",
        desc: "Kemahiran menggunakan deria untuk mengumpul maklumat.",
        img: "images/Kemahiran Memerhati.jpeg"
    },
    {
        title: "Spesimen",
        category: "Sains",
        desc: "Contoh objek atau bahan yang digunakan untuk pemerhatian dan kajian.",
        img: "images/Spesimen.jpeg"
    },
    {
        title: "Terapung",
        category: "Sains",
        desc: "Keadaan objek yang berada di permukaan air.",
        img: "images/Terapung.jpeg"
    },
    {
        title: "Tenggelam",
        category: "Sains",
        desc: "Keadaan objek yang turun ke dasar air.",
        img: "images/Tenggelam.jpeg"
    },
    {
        title: "Magnet Bar",
        category: "Magnet",
        desc: "Magnet berbentuk batang panjang.",
        img: "images/Magnet Bar.jpeg"
    },
    {
        title: "Magnet Silinder",
        category: "Magnet",
        desc: "Magnet berbentuk silinder.",
        img: "images/Magnet Silinder.jpeg"
    },
    {
        title: "Magnet Ladam",
        category: "Magnet",
        desc: "Magnet berbentuk ladam kuda.",
        img: "images/Magnet Ladam.jpeg"
    },
    {
        title: "Magnet Cincin",
        category: "Magnet",
        desc: "Magnet yang mempunyai lubang di tengah.",
        img: "images/Magnet Cincin.jpeg"
    },
    {
        title: "Magnet Butang",
        category: "Magnet",
        desc: "Magnet kecil berbentuk bulat seperti butang.",
        img: "images/Magnet Butang.jpeg"
    },
    {
        title: "Magnet Bentuk U",
        category: "Magnet",
        desc: "Magnet berbentuk huruf U.",
        img: "images/Magnet Bentuk U.jpeg"
    },
    {
        title: "Kutub Sama",
        category: "Magnet",
        desc: "Kutub magnet yang sama akan saling menolak.",
        img: "images/Kutub Sama.jpeg"
    },
    {
        title: "Kutub Berlainan",
        category: "Magnet",
        desc: "Kutub magnet yang berlainan akan saling menarik.",
        img: "images/Kutub Berlainan.jpeg"
    },
    {
        title: "Penyerapan",
        category: "Sains",
        desc: "Proses sesuatu bahan menyerap cecair atau bahan lain.",
        img: "images/Penyerapan.jpeg"
    },
    {
        title: "Forsep",
        category: "Alatan Makmal",
        desc: "Alat untuk memegang objek kecil semasa eksperimen.",
        img: "images/Forsep.jpeg"
    },
    {
        title: "Kain Kasa",
        category: "Alatan Makmal",
        desc: "Jaring logam yang digunakan semasa pemanasan bahan.",
        img: "images/kain kasa.jpeg"
    },
    {
        title: "Kubus",
        category: "Bentuk",
        desc: "Bentuk tiga dimensi yang mempunyai enam permukaan segi empat sama.",
        img: "images/Kubus.jpeg"
    },
    {
        title: "Prisma",
        category: "Bentuk",
        desc: "Bentuk tiga dimensi yang mempunyai dua permukaan yang sama dan selari.",
        img: "images/Prisma.png"
    },
    {
        title: "Sfera",
        category: "Bentuk",
        desc: "Bentuk tiga dimensi yang bulat seperti bola.",
        img: "images/Sfera.jpeg"
    },
    {
        title: "Berkepak",
        category: "Haiwan",
        desc: "Ciri haiwan yang menunjukkan sama ada haiwan mempunyai kepak untuk terbang.",
        img: "images/Berkepak.jpeg"
    },
    {
        title: "Ukur Lilit",
        category: "Pengukuran",
        desc: "Ukuran jarak mengelilingi sesuatu objek, biasanya diukur menggunakan pita ukur atau tali.",
        img: "images/Ukur Lilit.jpeg"
    },
    {
        title: "Sisa Cecair",
        category: "Bahan Buangan",
        desc: "Bahan buangan dalam bentuk cecair seperti air kotor, minyak terpakai atau larutan selepas aktiviti eksperimen.",
        img: "images/Sisa Cecair.jpeg"
    },
    {
        title: "Sisa Pepejal",
        category: "Bahan Buangan",
        desc: "Bahan buangan dalam bentuk pepejal seperti kertas, plastik, sisa makanan atau bahan eksperimen yang tidak digunakan lagi.",
        img: "images/Sisa Pepejal.jpeg"
    },
    {
        title: "Pewarisan",
        category: "Manusia dan Haiwan",
        desc: "Proses pemindahan ciri daripada ibu bapa kepada anak, seperti jenis rambut, warna mata atau bentuk muka.",
        img: "images/Pewarisan.jpeg"
    },
    {
        title: "Jenis Rambut Ikal",
        category: "Pewarisan",
        desc: "Ciri rambut yang beralun atau tidak lurus sepenuhnya dan boleh diwarisi daripada ibu bapa.",
        img: "images/Jenis Rambut Ikal.jpeg"
    },
    {
        title: "Menetas",
        category: "Pembiakan Haiwan",
        desc: "Proses anak haiwan keluar daripada telur selepas tempoh pengeraman yang sesuai.",
        img: "images/Menetas.jpeg"
    },
    {
        title: "Beranak Sedikit",
        category: "Pembiakan Haiwan",
        desc: "Cara pembiakan haiwan yang melahirkan bilangan anak yang sedikit pada satu masa, contohnya kucing atau lembu.",
        img: "images/Beranak Sedikit.png"
    },
    {
        title: "Beranak Banyak",
        category: "Pembiakan Haiwan",
        desc: "Cara pembiakan haiwan yang melahirkan bilangan anak yang banyak pada satu masa, contohnya tikus atau arnab.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Lilitan Batang",
        category: "Tumbuhan",
        desc: "Ukuran mengelilingi batang pokok yang boleh digunakan untuk memerhati tumbesaran tumbuhan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Kertas Surih",
        category: "Bahan",
        desc: "Kertas nipis yang lut sinar dan digunakan untuk menyalin bentuk, corak atau imej.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Kaca Kabut",
        category: "Bahan",
        desc: "Kaca yang tidak lut sinar sepenuhnya dan hanya membenarkan cahaya melaluinya secara kabur.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Konduktor",
        category: "Bahan",
        desc: "Bahan yang boleh mengalirkan haba atau elektrik dengan baik, contohnya logam seperti besi dan tembaga.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Penebat",
        category: "Bahan",
        desc: "Bahan yang tidak membenarkan haba atau elektrik mengalir melaluinya dengan mudah, contohnya plastik, kayu dan getah.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Mengayak",
        category: "Pengasingan Bahan",
        desc: "Kaedah mengasingkan bahan halus dan bahan kasar menggunakan ayak.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Mengapung",
        category: "Pengasingan Bahan",
        desc: "Kaedah mengasingkan bahan berdasarkan kebolehan bahan terapung di permukaan air.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Menyisih",
        category: "Pengasingan Bahan",
        desc: "Kaedah mengasingkan bahan dengan memilih dan mengasingkan objek berdasarkan ciri seperti saiz, warna atau bentuk.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Menuras",
        category: "Pengasingan Bahan",
        desc: "Kaedah mengasingkan pepejal tidak larut daripada cecair menggunakan kertas turas dan corong turas.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Kelalang Kon",
        category: "Alatan Makmal",
        desc: "Alat makmal berbentuk kon yang digunakan untuk menyimpan, mencampur atau memanaskan cecair semasa eksperimen.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Corong Turas",
        category: "Alatan Makmal",
        desc: "Alat makmal yang digunakan bersama kertas turas untuk menuras campuran pepejal dan cecair.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Kertas Turas",
        category: "Alatan Makmal",
        desc: "Kertas khas yang digunakan untuk menahan pepejal tidak larut semasa proses penurasan.",
        img:"images/Beranak Banyak.jpeg"
    },
    {
        title: "Mengelas",
        category: "Kemahiran Saintifik",
        desc: "Kemahiran mengasingkan dan mengumpulkan objek atau maklumat berdasarkan ciri yang sama.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Inferens",
        category: "Kemahiran Saintifik",
        desc: "Kesimpulan awal yang dibuat berdasarkan pemerhatian dan pengetahuan sedia ada.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Meramal",
        category: "Kemahiran Saintifik",
        desc: "Kemahiran menjangka perkara yang mungkin berlaku berdasarkan pemerhatian, pola atau maklumat yang ada.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Gigi Taring",
        category: "Manusia",
        desc: "Gigi yang tajam dan digunakan untuk mengoyak makanan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Gigi Kacip",
        category: "Manusia",
        desc: "Gigi di bahagian hadapan mulut yang digunakan untuk memotong makanan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Gigi Geraham",
        category: "Manusia",
        desc: "Gigi besar di bahagian belakang mulut yang digunakan untuk menghancur dan mengisar makanan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Enamel",
        category: "Manusia",
        desc: "Lapisan paling luar gigi yang keras dan berfungsi melindungi bahagian dalam gigi.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Dentin",
        category: "Manusia",
        desc: "Lapisan di bawah enamel yang membentuk sebahagian besar struktur gigi.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Pendakap Gigi",
        category: "Penjagaan Gigi",
        desc: "Alat yang dipasang pada gigi untuk membantu membetulkan susunan gigi supaya lebih teratur.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tampalan",
        category: "Penjagaan Gigi",
        desc: "Rawatan untuk menutup lubang atau kerosakan kecil pada gigi supaya gigi boleh digunakan semula dengan baik.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Gigi Palsu",
        category: "Penjagaan Gigi",
        desc: "Gigi buatan yang digunakan untuk menggantikan gigi asal yang telah hilang.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Rawatan Akar",
        category: "Penjagaan Gigi",
        desc: "Rawatan untuk membersihkan bahagian dalam akar gigi yang dijangkiti atau rosak bagi menyelamatkan gigi.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Pelawas",
        category: "Makanan dan Kesihatan",
        desc: "Serat dalam makanan yang membantu melancarkan proses pembuangan najis dan menjaga kesihatan sistem pencernaan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Pencernaan",
        category: "Manusia",
        desc: "Proses memecahkan makanan kepada bahan yang lebih ringkas supaya nutrien dapat diserap oleh badan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Mentafsir Data",
        category: "Kemahiran Saintifik",
        desc: "Kemahiran menerangkan maksud maklumat yang dikumpulkan daripada jadual, carta, graf atau pemerhatian.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Pemboleh Ubah Dimanipulasi",
        category: "Penyiasatan Saintifik",
        desc: "Faktor yang diubah oleh penyiasat dalam sesuatu eksperimen untuk melihat kesannya.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Pemboleh Ubah Malar",
        category: "Penyiasatan Saintifik",
        desc: "Faktor yang dikekalkan sama sepanjang eksperimen supaya keputusan lebih adil dan tepat.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Pemboleh Ubah Bergerak Balas",
        category: "Penyiasatan Saintifik",
        desc: "Faktor yang berubah dan diperhatikan atau diukur sebagai hasil daripada perubahan pemboleh ubah dimanipulasi.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Hipotesis",
        category: "Penyiasatan Saintifik",
        desc: "Pernyataan awal yang boleh diuji melalui eksperimen untuk melihat sama ada benar atau tidak.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Mengeksperimen",
        category: "Kemahiran Saintifik",
        desc: "Kemahiran menjalankan penyiasatan secara terancang untuk menguji hipotesis atau mendapatkan jawapan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Kadar Pernafasan",
        category: "Manusia",
        desc: "Bilangan pernafasan dalam satu tempoh masa. Kadar ini boleh menjadi rendah, sederhana atau tinggi mengikut aktiviti badan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Perkumuhan",
        category: "Manusia",
        desc: "Proses penyingkiran bahan buangan daripada badan seperti peluh, air kencing dan karbon dioksida.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Penyahtinjaan",
        category: "Manusia",
        desc: "Proses menyingkirkan tinja daripada badan melalui dubur.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Merembaskan Peluh",
        category: "Manusia",
        desc: "Proses kulit mengeluarkan peluh untuk menyingkirkan bahan buangan dan membantu menyejukkan badan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tinja",
        category: "Manusia",
        desc: "Sisa makanan yang tidak tercerna dan disingkirkan daripada badan semasa penyahtinjaan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Dubur",
        category: "Manusia",
        desc: "Bahagian akhir salur pencernaan tempat tinja dikeluarkan daripada badan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Rangsangan",
        category: "Manusia dan Haiwan",
        desc: "Perubahan di persekitaran yang dapat dikesan oleh manusia atau haiwan, seperti cahaya, bunyi, sentuhan atau bau.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Gerak Balas",
        category: "Manusia dan Haiwan",
        desc: "Tindakan atau perubahan yang berlaku selepas sesuatu organisma menerima rangsangan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Peparu",
        category: "Organ Pernafasan",
        desc: "Organ pernafasan manusia dan sesetengah haiwan yang mengambil oksigen dan menyingkirkan karbon dioksida.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Spirakel",
        category: "Organ Pernafasan",
        desc: "Lubang kecil pada badan serangga yang membolehkan udara masuk dan keluar untuk pernafasan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Insang",
        category: "Organ Pernafasan",
        desc: "Organ pernafasan ikan dan haiwan akuatik tertentu yang membolehkan oksigen diambil daripada air.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Kulit Lembap",
        category: "Organ Pernafasan",
        desc: "Kulit yang sentiasa lembap dan membantu sesetengah haiwan seperti cacing dan amfibia bernafas.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Haiwan Vertebrata",
        category: "Haiwan",
        desc: "Haiwan yang mempunyai tulang belakang, seperti ikan, amfibia, reptilia, burung dan mamalia.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Haiwan Invertebrata",
        category: "Haiwan",
        desc: "Haiwan yang tidak mempunyai tulang belakang, seperti serangga, cacing, siput dan sotong.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Mamalia",
        category: "Haiwan Vertebrata",
        desc: "Kumpulan haiwan vertebrata yang biasanya berbulu atau berambut, beranak dan menyusukan anak.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Reptilia",
        category: "Haiwan Vertebrata",
        desc: "Kumpulan haiwan vertebrata yang biasanya mempunyai kulit bersisik, bernafas menggunakan peparu dan kebanyakannya bertelur.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Amfibia",
        category: "Haiwan Vertebrata",
        desc: "Kumpulan haiwan vertebrata yang boleh hidup di air dan di darat, seperti katak.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Litupan Badan",
        category: "Haiwan",
        desc: "Bahagian yang menutupi badan haiwan seperti bulu, sisik, cangkerang atau kulit.",
        img: "images/Beranak Banyak.jpeg"
    },

    {
        title: "Klorofil",
        category: "Tumbuhan",
        desc: "Bahan hijau dalam daun yang menyerap cahaya matahari untuk proses fotosintesis.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Glukosa",
        category: "Tumbuhan",
        desc: "Gula ringkas yang dihasilkan oleh tumbuhan semasa fotosintesis dan digunakan sebagai sumber tenaga.",
        img: "https://placehold.co/600x400/e0f2fe/00346f?text=Glukosa"
    },
    {
        title: "Lut Sinar, Lut Cahaya dan Legap",
        category: "Cahaya",
        desc: "Lut sinar membenarkan cahaya dan imej jelas melaluinya, lut cahaya membenarkan cahaya melalui secara kabur, manakala legap tidak membenarkan cahaya melaluinya.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Pantulan Cahaya",
        category: "Cahaya",
        desc: "Fenomena apabila cahaya melantun semula selepas terkena permukaan seperti cermin.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Pembiasan Cahaya",
        category: "Cahaya",
        desc: "Fenomena cahaya berubah arah apabila melalui medium yang berbeza seperti udara ke air.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Kaleidoskop",
        category: "Cahaya",
        desc: "Alat yang menggunakan pantulan cahaya pada cermin untuk menghasilkan corak yang berulang dan menarik.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Fenomena Pantulan Bunyi",
        category: "Bunyi",
        desc: "Fenomena bunyi melantun apabila terkena permukaan. Contohnya ultrasonik, gema dan sonar.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Bunyi Berfaedah dan Bunyi Memudaratkan",
        category: "Bunyi",
        desc: "Bunyi berfaedah membantu manusia, contohnya amaran dan komunikasi. Bunyi memudaratkan pula terlalu kuat atau mengganggu kesihatan pendengaran.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Penyerap Bunyi",
        category: "Bunyi",
        desc: "Bahan yang boleh mengurangkan pantulan bunyi, seperti span, kain tebal dan permaidani.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Pelindung Telinga",
        category: "Bunyi",
        desc: "Alat yang digunakan untuk melindungi telinga daripada bunyi yang terlalu kuat.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Gesekan",
        category: "Penghasilan Bunyi",
        desc: "Cara menghasilkan bunyi dengan menggosok atau menggesek sesuatu objek.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tiupan",
        category: "Penghasilan Bunyi",
        desc: "Cara menghasilkan bunyi dengan meniup udara ke dalam atau melalui sesuatu alat.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tepukan",
        category: "Penghasilan Bunyi",
        desc: "Cara menghasilkan bunyi dengan menepuk dua permukaan atau objek.",
        img: "https://placehold.co/600x400/e0f2fe/00346f?text=Tepukan"
    },
    {
        title: "Petikan",
        category: "Penghasilan Bunyi",
        desc: "Cara menghasilkan bunyi dengan memetik tali atau bahagian tertentu pada alat muzik.",
        img: "https://placehold.co/600x400/e0f2fe/00346f?text=Petikan"
    },
    {
        title: "Ketukan",
        category: "Penghasilan Bunyi",
        desc: "Cara menghasilkan bunyi dengan mengetuk sesuatu objek atau permukaan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Biojisim",
        category: "Sumber Tenaga",
        desc: "Bahan daripada tumbuhan atau haiwan yang boleh digunakan sebagai sumber tenaga.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Bahan Nuklear",
        category: "Sumber Tenaga",
        desc: "Bahan seperti uranium yang digunakan untuk menghasilkan tenaga nuklear.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Bahan Api Fosil",
        category: "Sumber Tenaga",
        desc: "Sumber tenaga seperti petroleum, gas asli dan arang batu yang terbentuk daripada tinggalan hidupan purba.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Kincir Angin",
        category: "Sumber Tenaga",
        desc: "Alat yang menggunakan tenaga angin untuk memutarkan bilah dan boleh membantu menjana elektrik.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tinja Haiwan",
        category: "Sumber Tenaga",
        desc: "Sisa haiwan yang boleh diproses untuk menghasilkan biogas sebagai sumber tenaga.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Empangan Hidroelektrik",
        category: "Sumber Tenaga",
        desc: "Struktur yang menggunakan aliran air untuk memutarkan turbin dan menjana tenaga elektrik.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Stesen Janakuasa Nuklear",
        category: "Sumber Tenaga",
        desc: "Tempat tenaga nuklear digunakan untuk menghasilkan haba dan menjana elektrik.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Petroleum/Gas Asli",
        category: "Sumber Tenaga",
        desc: "Bahan api fosil yang digunakan sebagai sumber tenaga untuk pengangkutan, pemanasan dan penjanaan elektrik.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tenaga Suria",
        category: "Bentuk Tenaga",
        desc: "Tenaga daripada cahaya matahari yang boleh digunakan untuk menghasilkan elektrik atau haba.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tenaga Haba",
        category: "Bentuk Tenaga",
        desc: "Tenaga yang berkaitan dengan kepanasan sesuatu objek atau bahan.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tenaga Cahaya",
        category: "Bentuk Tenaga",
        desc: "Tenaga yang membolehkan kita melihat objek dan dihasilkan oleh sumber cahaya seperti matahari atau lampu.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tenaga Kimia",
        category: "Bentuk Tenaga",
        desc: "Tenaga yang tersimpan dalam bahan seperti makanan, bateri dan bahan api.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tenaga Kinetik",
        category: "Bentuk Tenaga",
        desc: "Tenaga yang dimiliki oleh objek yang sedang bergerak.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tenaga Keupayaan",
        category: "Bentuk Tenaga",
        desc: "Tenaga yang tersimpan dalam objek kerana kedudukan atau keadaannya.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tenaga Bunyi",
        category: "Bentuk Tenaga",
        desc: "Tenaga yang dihasilkan oleh getaran dan boleh didengar sebagai bunyi.",
        img: "https://placehold.co/600x400/e0f2fe/00346f?text=Tenaga+Bunyi"
    },
    {
        title: "Tenaga Elektrik",
        category: "Bentuk Tenaga",
        desc: "Tenaga yang dihasilkan oleh aliran cas elektrik dan digunakan untuk menghidupkan peralatan elektrik.",
        img: "images/Beranak Banyak.jpeg"
    },
    {
        title: "Tenaga Nuklear",
        category: "Bentuk Tenaga",
        desc: "Tenaga yang tersimpan dalam nukleus atom dan boleh digunakan untuk menjana elektrik.",
        img: "images/Beranak Banyak.jpeg"
    }
];

