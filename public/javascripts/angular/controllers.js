/**
 * Created by Shivam Mathur on 17-02-2016.
 */
var controllers = {};
var dates={
    abstracts:'25th September 2016',
    notification:'30th September 2016',
    normalrate:'15th October 2016',
    accommodations:'15th October 2016'
};
controllers.header =  function($scope){};
controllers.main = function($scope){
    $scope.dates = dates;
    $(document).ready(function(){
        $('.slider').slider({full_width: true});
    });
    $('.indicators').css('padding-bottom','3.5em').css('z-index','10');
};
controllers.register = function($scope){

    $scope.dates = dates;
    $(document).ready(function(){
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
    });


    $scope.Indian = [
        {
        "cat" : "Students (BRSI Members)",
            "fee1" : 3000,
            "fee2": 3500
        },
        {
            "cat" : "Students (Non BRSI Members)",
            "fee1" : 3750,
            "fee2": 4250
        },
        {
            "cat" : "Full Delegates (BRSI Members)",
            "fee1" : 4000,
            "fee2": 5000
        },
        {
            "cat" : "Full Deledates (Non BRSI Members)	",
            "fee1" : 5000,
            "fee2": 6000
        },
        {
            "cat" : "Accompanying Person",
            "fee1" : 3000,
            "fee2": 3500
        }
    ];
$scope.Over = [
    {
        "cat" : "Students",
        "fee1" : 75,
        "fee2": 100
    },
    {
        "cat" : "Full Deledates",
        "fee1" : 100	,
        "fee2": 125
    },
    {
        "cat" : "Accompanying Person",
        "fee1" : 75,
        "fee2": 100
    }
];
};

controllers.contact = function($scope){
    $scope.dates = dates;
    $scope.contactus = [
        {
            pos:"Convenor",
            name:"Dr.S.Karthi",
            phone: 9566656757,
            email:"asstdirector.pat@vit.ac.in",
            des:"Assistant Director - Placement & Training"+'<br>'+  'Associate Professor - SBST, HTS Labs' +'<br>'+ ' VIT University, Vellore. 632014'
    }
    ]
};
controllers.paperGeneral = function($scope){
    $scope.dates = dates;
};
controllers.paperAbstracts = function($scope){
    $scope.dates = dates;
};
controllers.paperFull = function($scope){
    $scope.dates = dates;
};
controllers.invite =function($scope){
    $scope.dates = dates;
};
controllers.committees = function($scope){
    $scope.dates = dates;
    $(document).ready(function(){
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
    });
    var set1 = {
        "name":" National Steering Committee",
        "committee":[
            {
                "name":"Datta, Asis",
                "institute":"National Institute of Plant Genomics Research, New Delhi",
                "img":"images/NSC/image1.png"
            },
            {
                "name":"Gaikaiwari, Raghavendra",
                "institute":"Hi-Tech Biosciences Ltd, Pune",
                "img":"images/NSC/image2.png"
            },
            {
                "name":"Ghosh, Amit",
                "institute":"National Institute of Cholera and, Enteric Diseases, Kolkata   ",
                "img":"images/NSC/image3.png"
            },
            {
                "name":"Kumar, Rakesh",
                "institute":"National Environmental Engineering Research Institute, Nagpur",
                "img":"images/NSC/image4.png"
            },
            {
                "name":"Kumar, Sanjay",
                "institute":"CSIR-Institute of Himalayan Bioresource Technology, Palampur",
                "img":"images/NSC/image5.png"
            },
            {
                "name":"Nautiyal, Chandra Shekhar",
                "institute":"CSIR-National Botanical Research Institute, Lucknow",
                "img":"images/NSC/image6.png"
            },
            {
                "name":"Nuna, Sheel",
                "institute":"QUT South Asia Office, New Delhi",
                "img":"images/NSC/image7.png"
            },
            {
                "name":"Padmanaban, G",
                "institute":"Indian Institute of Science, Bangalore",
                "img":"images/NSC/image8.png"
            },
            {
                "name":"Palakhiwala, Piyush",
                "institute":"Maps Enzymes Ltd, Ahmadabad",
                "img":"images/NSC/image9.png"
            },
            {
                "name":"Sahoo, Dinabandhu",
                "institute":"Institute of Bioresources and Sustainable Development, Imphal",
                "img":"images/NSC/image10.png"
            },
            {
                "name":"Sangwan, Rajender S",
                "institute":"Centre for Innovative and Applied Bioprocessing, Mohali",
                "img":"images/NSC/image11.png"
            },
            {
                "name":"Yadav, JS",
                "institute":"Indian Institute of Chemical Technology, Hyderabad",
                "img":"images/NSC/image12.png"
            }
        ]
    };
    var set2 = {
        "name":" National Organizing Committee",
        "committee":[
            {
                "name":"Agarwal, Avinash Kumar",
                "institute":"National Institute of Plant Genomics Research, New Delhi",
                "img":"images/NOC/image1.png"
            },
            {
                "name":"Agarwal, Sunil",
                "institute":"Department of Science and Technology, GoI, New Delhi",
                "img":"images/NOC/image2.png"
            },
            {
                "name":"Agarwal, Vivek",
                "institute":"CDC India, Jaipur",
                "img":"images/NOC/image3.png"
            },
            {
                "name":"Agasar, Dayanand",
                "institute":"Gulbarga University, Gulbarga",
                "img":"images/NOC/image4.png"
            },
            {
                "name":"Banerjee, Moinak",
                "institute":"Rajeev Gandhi Centre for Biotechnology, Trivandrum",
                "img":"images/NOC/image5.png"
            },
            {
                "name":"Baskar, Gurunathan",
                "institute":"St Joseph’s College, Chennai",
                "img":"images/NOC/image6.png"
            },
            {
                "name":"Bhaskar, Thallada",
                "institute":"CSIR-Indian Institute of Petroleum, Dehradun",
                "img":"images/NOC/image7.png"
            },
            {
                "name":"Binod, P",
                "institute":"CSIR-National Institute for Interdisciplinary S&T, Trivandrum",
                "img":"images/NOC/image8.png"
            },
            {
                "name":"Chadha, Bhupinder S ",
                "institute":"Guru Nanak Dev University, Amritsar",
                "img":"images/NOC/image9.png"
            },
            {
                "name":"Chanakya, Visvanatha",
                "institute":"Gandhi Institute of Technology and Management, Visakhapatnam",
                "img":"images/NOC/image10.png"
            },
            {
                "name":"De, Sudipta",
                "institute":"Jadavpur University, Kolkata",
                "img":"images/NOC/image11.png"
            },
            {
                "name":"Dharmpalan, Biju",
                "institute":"MACFAST, Thiruvalla",
                "img":"images/NOC/image12.png"
            },
            {
                "name":"Dubey, Suresh Kumar",
                "institute":"Banaras Hindu University, Varanasi",
                "img":"images/NOC/image13.png"
            },
            {
                "name":"Garg, Vinod K",
                "institute":"Central University of Punjab, Bhatinda",
                "img":"images/NOC/image14.png"
            },
            {
                "name":"Govindwar, Sanjay P ",
                "institute":"Shivaji University, Kolhapur",
                "img":"images/NOC/image15.png"
            },
            {
                "name":"Kataki, Rupam",
                "institute":"Tezpur University, Tezpur",
                "img":"images/NOC/image16.png"
            },
            {
                "name":"Khare, Sunil K",
                "institute":"Indian Institute of Technology, New Delhi",
                "img":"images/NOC/image17.png"
            },
            {
                "name":"Kuhad, Ramesh C",
                "institute":"Central University of Haryana, Mahendergarh",
                "img":"images/NOC/image18.png"
            },
            {
                "name":"Kumar, Sunil",
                "institute":"CSIR-National Environmental Eng Research Institute, Nagpur",
                "img":"images/NOC/image19.png"
            },
            {
                "name":"Lele, Smita",
                "institute":"Institute of Chemical Technology, Mumbai",
                "img":"images/NOC/image20.png"
            },
            {
                "name":"Mohan, S Venkata",
                "institute":"CSIR-Indian Institute of Chemical Technology, Hyderabad",
                "img":"images/NOC/image21.png"
            },
            {
                "name":"Mondal, Keshab C",
                "institute":"Vidyasagar University, Midnapore",
                "img":"images/NOC/image22.png"
            },
            {
                "name":"Nampoothiri, Madhavan K",
                "institute":"CSIR-National Institute for Interdisciplinary S&T, Trivandrum",
                "img":"images/NOC/image23.png"
            },
            {
                "name":"Nawani, Neelu",
                "institute":"Dr DY Patil Institute of Biotechnology & Bioinformatics, Pune",
                "img":"images/NOC/image24.png"
            },
            {
                "name":"Pandey, DM",
                "institute":"BITS, Mesra, Ranch",
                "img":"images/NOC/image25.png"
            },
            {
                "name":"Pandian, SK",
                "institute":"Alaggappa University,Karaikudi",
                "img":"images/NOC/image26.png"
            },
            {
                "name":"Pant, Deepak",
                "institute":"Central University of Himachal Pradesh, Dharamshala",
                "img":"images/NOC/image27.png"
            },
            {
                "name":"Prasad, RBN",
                "institute":"CSIR-Indian Institute of Chemical Technology, Hyderabad",
                "img":"images/NOC/image28.png"
            },
            {
                "name":"Praveenkumar, Ramanujam",
                "institute":"Arunai Engineering College, Thiruvannamalai",
                "img":"images/NOC/image29.png"
            },
            {
                "name":"Ramachandran, KB",
                "institute":"Indian Institute of Technology, Chennai",
                "img":"images/NOC/image30.png"
            },
            {
                "name":"Rangarajan, PN",
                "institute":"Indian Institute of Science, Bangalore",
                "img":"images/NOC/image31.png"
            },
            {
                "name":"Sangwan, Rajender S",
                "institute":"Centre for Innovative and Applied Bioprocessing, Mohali",
                "img":"images/NOC/image32.png"
            },
            {
                "name":"Sankaran, Krishnan",
                "institute":"Anna University, Chennai",
                "img":"images/NOC/image33.png"
            },
            {
                "name":"Sarangan, Swaroop",
                "institute":"Reliance Industries Ltd, Mumbai",
                "img":"images/NOC/image.png"
            },
            {
                "name":"Satyanarayana, Tulsi",
                "institute":"University of Delhi, New Delhi",
                "img":"images/NOC/image34.png"
            },
            {
                "name":"Singh, Durg V ",
                "institute":"Institute of Life Sciences, Bhubaneswar",
                "img":"images/NOC/image35.png"
            },
            {
                "name":"Singh, Ram S",
                "institute":"Punjabi University, Patiala",
                "img":"images/NOC/image36.png"
            },
            {
                "name":"Srivastava, Sangeeta",
                "institute":"Godawari Biorefineries Ltd, Mumbai",
                "img":"images/NOC/image.png"
            },
            {
                "name":"Sukumaran, Rajeev K",
                "institute":"CSIR-National Institute for Interdisciplinary S&T, Trivandrum",
                "img":"images/NOC/image37.png"
            },
            {
                "name":"Tamang, Jyoti P ",
                "institute":"Sikkim University, Gangtok",
                "img":"images/NOC/image38.png"
            },
            {
                "name":"Thakur, Indu S",
                "institute":"Jawaharlal Nehru University, New Delhi",
                "img":"images/NOC/image39.png"
            },
            {
                "name":"Upadhyay, Siddha N ",
                "institute":"Banaras Hindu University, Varanasi",
                "img":"images/NOC/image40.png"
            },
            {
                "name":"Wangikar, Pramod K",
                "institute":"Indian Institute of Technology, Mumbai",
                "img":"images/NOC/image41.png"
            }
        ]
    };
    var set3 = {
        "name":" International Advisory Committee",
        "committee":[
            {
                "name":"Bhoopathy, Raj",
                "institute":"University of Nicholls, USA",
                "img":"images/IAC/image1.jpeg"
            },
            {
                "name":"Castro, Guillermo R",
                "institute":"Universidad Nacional de La Plata, La Plata, Argentina",
                "img":"images/IAC/image2.jpeg"
            },
            {
                "name":"Chang, Jo Shu",
                "institute":"National Cheng Kung University, Taiwan",
                "img":"images/IAC/image3.jpeg"
            },

            {
                "name":"Dosoretz, Carlos",
                "institute":"Technicon, Israel Institute of Technology, Haifa, Israel",
                "img":"images/IAC/image4.jpeg"
            },
            {
                "name":"Ferreira-Dias, Suzana",
                "institute":"Technical University of Lisbon, Lisbon, Portugal",
                "img":"images/IAC/image5.jpeg"
            },
            {
                "name":"Gnansonou, Edgard",
                "institute":"École Polytechnique Fédérale de Lausanne (EPFL), Lausanne, Switzerland",
                "img":"images/IAC/image6.jpeg"
            },
            {
                "name":"Janecek, Stefan",
                "institute":"Institute of Molecular Biology, Slovak Academy of Sciences, Bratislava, Slovakia",
                "img":"images/IAC/image7.jpeg"
            },
            {
                "name":"Kaul, Sunil ",
                "institute":"National Institute of Advanced Industrial Science & Technology, Japan",
                "img":"images/IAC/image8.jpeg"
            },
            {
                "name":"Khanal, Samir ",
                "institute":"University of Hawaii at Mãnoa, Honolulu, Hawaii, USA",
                "img":"images/IAC/image9.jpeg"
            },
            {
                "name":"Kondo, Akihiko",
                "institute":"Kobe University, Kobe, Japan",
                "img":"images/IAC/image10.jpeg"
            },
            {
                "name":"Larroche, Christian",
                "institute":"Universite Blaise Pascal, Clermont Ferrand, France",
                "img":"images/IAC/image11.jpeg"
            },
            {
                "name":"Lee, Duu Jong",
                "institute":"National Taiwan University, Taipei, Taiwan",
                "img":"images/IAC/image12.jpeg"
            },
            {
                "name":"Lee, Keat Teong ",
                "institute":"Universiti Sains Malaysia, Pulau Pinang, Malaysia",
                "img":"images/IAC/image13.jpeg"
            },
            {
                "name":"Ngo, Hao Huu  ",
                "institute":"University of Technology, Sydney, Australia",
                "img":"images/IAC/image14.jpeg"
            },
            {
                "name":"Nigam, Poonam ",
                "institute":"University of Ulster, Coleraine, Co. Londonderry, Northern Ireland, UK",
                "img":"images/IAC/image15.jpeg"
            },
            {
                "name":"Papamichael, Emmanuel M ",
                "institute":"University of Ioannina, Greece",
                "img":"images/IAC/image.jpeg"
            },
            {
                "name":"Park, Jong Moon ",
                "institute":"Pohang University of Science and Technology, Pohang, Gyeongbuk, South Korea",
                "img":"images/IAC/image16.jpeg"
            },
            {
                "name":"Ruan, Roger ",
                "institute":"University of Minnesota, USA",
                "img":"images/IAC/image17.jpeg"
            },
            {
                "name":"Sanroman, Maria Angeles",
                "institute":"Universidad de Vigo, Vigo, Spain",
                "img":"images/IAC/image18.jpeg"
            },
            {
                "name":"Saucedo-Castaneda, Gerardo",
                "institute":"Universidad Autónoma Metropolitana-Iztapalapa, México",
                "img":"images/IAC/image19.jpeg"
            },
            {
                "name":"Soccol, Carlos Ricardo",
                "institute":"Federal University of Parana, Curitiba, Brazil",
                "img":"images/IAC/image.jpeg"
            },
            {
                "name":"Tahezadeh, Mohammad",
                "institute":"University of Borås, Borås, Sweden",
                "img":"images/IAC/image20.jpeg"
            },
            {
                "name":"Tyagi, Rajeshwar Dayal",
                "institute":"INRS, Quebec, Canada",
                "img":"images/IAC/image21.jpeg"
            },
            {
                "name":"Visvanathan, C ",
                "institute":"Asian Institute of Technology, Klongluang, Pathumthani, Thailand",
                "img":"images/IAC/image22.jpeg"
            },
            {
                "name":"Wong, Jonathan",
                "institute":"Hong Kong Baptist University, Hong Kong",
                "img":"images/IAC/image23.jpeg"
            }
        ]
    };
    var set4 = {
        "name":"Local Working Committee",
        "committee":[
            {
                "name":"Dr. M.Rasool",
                "institute":"Organizing Secretary",
                "img":"/images/LWC/image1.png"
            },
            {
                "name":"Dr. K.Ramanathan",
                "institute":"Organizing Secretary",
                "img":"/images/LWC/image2.png"
            },
            {
                "name":"Dr. M.Arabi Saleh",
                "institute":"Organizing Secretary",
                "img":"/images/LWC/image3.png"
            },
            {
                "name":"Dr. Arnold Ememerson",
                "institute":"Organizing Secretary",
                "img":"/images/LWC/image4.png"
            },
            {
                "name":"Dr. V. Mohana Srinivasan",
                "institute":"Organizing Secretary",
                "img":"/images/LWC/image5.png"
            },{
                "name":"Dr. G Jayaraman",
                "institute":"Organizing Secretary",
                "img":"/images/LWC/image5.jpeg"
            },
            {
                "name":"Dr. A. Sivakumar",
                "institute":"Joint Secretary",
                "img":"/images/LWC/image6.png"
            },
            {
                "name":"Dr. Febin Prabhudass",
                "institute":"Joint Secretary",
                "img":"/images/LWC/image7.png"
            },
            {
                "name":"Dr. S.Vino",
                "institute":"Joint Secretary",
                "img":"/images/LWC/image8.png"
            },
            {
                "name":"Dr. K.Suthindiran",
                "institute":"Joint Secretary",
                "img":"/images/LWC/image9.png"
            },
            {
                "name":"Dr. Jabaz Osborne",
                "institute":"Joint Secretary",
                "img":"/images/LWC/image10.png"
            },{
                "name":"Dr. N. Ramesh",
                "institute":"Joint Secretary",
                "img":"/images/LWC/image6.jpeg"
            }
        ]
    };


    $scope.setArr = function(i){
        if(i==1)
            $scope.arr= set1;
        else if(i==2)
            $scope.arr=set2;
        else if(i==3)
            $scope.arr= set3;
        else
            $scope.arr = set4;
    };
};
controllers.sciProg = function($scope){
    $scope.dates = dates;
    $scope.programs = [
        {
            "name":'Industrial Biotechnology (IB)',
            'courses':[
                'IB 1 Bioprocesses & Products development',
                'IB 2 Biocatalyses & Biotransformations',
                'IB 3 Bioprocess monitoring, modeling and control',
                'IB 4 Downstream Processing',
                'IB 5 Animal cell culture for bioproducts'
            ]
        },
        {
            "name":'Biofuels and Biorefineries (BR)',
            'courses':[
                'BR 1 Algal Cultivation & Harvesting',
                'BR 2 Biofuels from Algae',
                'BR 3 Lignocellulosic Bioethanol',
                'BR 4 Thermochemical platform for fuels and chemicals',
                'BR 5 Pretreatment Technologies',
                'BR 6 Biodiesel',
                'BR 7 Biohydrogen'
            ]
        },
        {
            "name":'Food and Agricultural Biotechnology (FAB)',
            'courses':[
                'FAB 1 Food Fermentation, Processing and Food Microbiology',
                'FAB 2 Pre & Probiotics, Functional Foods/Nutraceuticals',
                'FAB 3 Plant Growth Promoting Microbes and Plant Microbe interactions',
                'FAB 4 Plant Tissue culture and micropropagation',
                'FAB 5 GM crops and hybrid crops'
            ]
        },
        {
            "name":'Medical Biotechnology (MB)',
            'courses':[
                'MB 1 Health Care Biotechnology',
                'MB 2 Diagnostic Platforms Technologies',
                'MB 3 Vaccines',
                'MB 4 Stem cells and Stem cell Technologies',
                'MB 5 Cancer Research'
            ]
        },
        {
            "name":'Environmental Biotechnology (EB)',
            'courses':[
                'EB 1 Anaerobic digestion',
                'EB 2 Aerobic digestion',
                'EB 3 Industrial effluent treatment',
                'EB 4 Solid waste management'
            ]
        },
        {
            "name":'Basic and Applied Molecular Biology and Bioinformatics (BAMB)',
            'courses':[
                'BAMB 1 Metabolic pathways/Signal transduction/Metabolic engineering',
                'BAMB 2 Molecular cloning /Recombinant DNA',
                'BAMB 3 Structure Biology /Structure function relationships/homology modeling',
                'BAMB 4 Genomics/Proteomics/Expression Analyses',
                'BAMB 5 Gene Regulation/RNAi/miRNA',
                'BAMB 6 Applied Molecular Biology',
                'BAMB 7 Computational Biology/Software',
                'BAMB 8 Bioinformatics in drug discovery'
            ]
        },
        {
            "name":'Nano Biotechnology (NB)',
            'courses':[
                ''
            ]
        }
    ];
};
controllers.accommodation =function($scope){
    $scope.dates = dates;
};
controllers.venue =function($scope){
    $scope.dates = dates;
    initMap();
};
controllers.awards =function($scope){
    $scope.dates = dates;
};
controllers.exhibition =function($scope){
    $scope.dates = dates;
};
controllers.posters =function($scope){
    $scope.dates = dates;
};
controllers.socialPrograms =function($scope){
    $scope.dates = dates;
};
controllers.ads =function($scope){
    $scope.dates = dates;
    $(document).ready(function(){
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
    });
    $scope.categories1 = [
        {
            'name':'Advertisement on  ICCB website (200x 150 pix) banner on home page*',
            'mono':'-',
            'multi':'Rs 40,000'
        },
        {
            'name':'Advertisement on  ICCB  website (200x 150 pix) banner on other pages*',
            'mono':'-',
            'multi':'Rs 20,000'
        },
        {
            'name':'Advertisement on  ICCB  website (200x 300 pix) banner on other pages*',
            'mono':'-',
            'multi':'Rs 20,000'
        },
        {
            'name':'Advertisement on  ICCB  website (200x 70 pix) banner on other pages*',
            'mono':'-',
            'multi':'Rs 10000'
        },
        {
            'name':'Abstract Book Back cover (outer)',
            'mono':'Rs.30,000',
            'multi':'Rs. 35,000'
        },
        {
            'name':'Abstract Book Front or Back cover (inner)',
            'mono':'Rs. 25,000',
            'multi':'Rs. 30,000'
        },
        {
            'name':'Abstract Book Full Page',
            'mono':'Rs. 10,000',
            'multi':'Rs. 20,000'
        }
    ];
    $scope.categories2 = [
        [
            'I (Contact us)',
            '+ (1)',
            '',
            '+ (3)',
            '+ (2)',
            'Color',
            '',
            '+',
            '',
            '+'
        ],
        [
            'II (50,000)',
            '',
            '+(1)',
            '+(2)',
            '+ (2)',
            'Color',
            '',
            '',
            '+',
            '+'
        ],
        [
            'III (30000)',
            '',
            '',
            '+ (2)',
            '+(2)',
            '',
            'Color',
            '',
            '',
            ''],
        [
            'IV (25000)',
            '',
            '',
            '+(2)',
            '+(1)',
            '',
            'B &W',
            '',
            '',
            ''],
        [
            'V (20000)',
            '',
            '',
            '+ (1)',
            '+ (1)',
            '',
            'B &W',
            '',
            '',
            '']
    ];
};

controllers.speakers = function($scope){
    $scope.setup = function(){
        $('.modal-trigger').leanModal();
    };
    $scope.currentSpeaker = {};
    $scope.CV = function(index){

        $scope.currentSpeaker=index;
        if($scope.currentSpeaker.desc.length==0){
            $scope.currentSpeaker.desc = "Under Construction";
        }
        console.log(index);
    };
    $scope.dates = dates;
    $scope.speakers = [
        {
            'name':"A. A. Koutinas",
            'img':"/images/Speakers/image1.png",
            'place':"University of Patras, Greece",
            'topic':"Development of a new generation nano-tubesfrom tubular cellulose after its hydrolysis with cellulasses",
            'desc':"On 1969 has graduated Department of Chemistry and on 1979 awarded him PhD. Elected Assistant Professor on 1985 and 1997 Professor of Food Chemistry and Biotechnology. Published 168 papers,  120 Ppresentations in conferences, has taken about 2.800 Citations with 27 h-Index. Developed 4 novel technologies of which two have been distinguished by the Greek Organization of Manufacturers and by  council of investors, Innovation Conference at Washington DC on 2015.  Established International MSc courses, 6 International collaborations and taught courses in European Universities. He has supervised more of 20 PhD students. His research has been funded by about 6.000.000 Euros. "
        },
        {
            'name':"Apostolis Koutinas",
            'img':"/images/Speakers/image2.png",
            'place':"Agricultural University Athens, Greece",
            'topic':"Biorefinery development for the production of bio-based chemicals and polymers using food industry side streams",
            'desc':"Apostolis Koutinas is Chemical Engineer (University of Patras, Greece) with PhD in biochemical engineering (UMIST, UK). He is Assistant Professor at the Agricultural University of Athens (Greece). His research focuses on biorefinery development, design and costing for efficient fractionation of renewable resources to separate value-added fractions (e.g. protein isolates, antioxidants) followed by microbial bioconversion of remaining fractions to produce fermentation products, such as microbial oil, succinic acid, 2,3-butanediol, polyhydroxyalkanoates, bio-colourants and bacterial cellulose. He has more than 68 publications in peer-reviewed scientific journals, 13 book chapters and serves as Associate Editor in Biochemical Engineering Journal (Elsevier)."
        },
        {
            'name':"Aikaterini Alexiou Chatzaki",
            'img':"/images/Speakers/",
            'place':"Democritus University of Thrace, Greece",
            'topic':"Gene promoter methylation and protein expression of BRMS1 gene in uterine cervix in relation to high-risk HPV infection and cervical cancer",
            'desc':"Prof. Chatzaki holds a B.Sc in Biology (University of Athens), and a Ph.D from the University of London. She has worked as a Post-doctoral Scientist in the Dept. Pharmacology, University of Crete, Greece, investigating extra-pituitary actions of neuropeptides and as an investigator at Neurocrine Bioscience Inc, CA, USA, in pre-clinical R&D of small molecule antagonists. She joined the Laboratory of Pharmacology of DUTH at 2002, where she is now Associate Professor. She has a >25 year experience in pharmacological characterization of newly developed compounds, with a large publication record of >75 scientific articles. Her research has received funding primarily by the EEC and the Greek Government and by industry."
        },
        {
            'name':"Ashwani Kumar",
            'img':"/images/Speakers/image3.png",
            'place':"Dr HSG University, Sagar",
            'topic':"Rhizosphere microbiome: Tool for understanding an engineering plant-microbe interaction",
            'desc':" Dr. Ashwani Kumar is an Assistant Professor at the Deptt. of Botany, Dr. Harisingh Gour Central University, Sagar (M.P.), India. He received his Ph.D. degree in 2011 under the guidance of Prof. Satyawati Sharma and Prof. Saroj Mishra from Indian Institute of Technology Delhi, India. Dr. Kumar has been awarded Prestigious Commonwealth Fellowship in Functional Genomics Lab. of Prof. Ravi N Chibbar at University of Saskatchewan, Canada. He did postdoctoral fellowship in the group of Prof. Suren Singh at Durban University of Technology, Durban, South Africa and Prof. Joanna Dames, Rhodes University, Grahamstown, South Africa. He received Claude Leon and National Research Foundation Postdoctoral Fellowship, South Africa. He received UGC-Startup Project grant from UGC, New Delhi. He published 25 research articles in Peer Reviewed Journals (Total Impact factor: 85, Citation: 1350, i10-index 15), 28 Conferences and 14 book chapters. He is also serving as an Editorial board member and reviewers of several journals. His research interest includes rhizosphere microbiome, plant-microbe interactions, biomass deconstruction, & metagenomics."
        },{
            'name':"Bhaskar Narayan",
            'img':"/images/Speakers/image5.png",
            'place':"CSIR-Central Food Technological Research Institute, Mysore",
            'topic':"Bio-TIPS for recovery of utilizable biomolecules from solid wastes from fish/meat processing industries",
            'desc':"Dr N Bhaskar is a Professional from the field of Industrial fishery technology and specializes in aquatic biofunctional materials especially on the recovery of biofunctional substances from fish/animal processing by-products and wastes. His R&D acumen and academic records have been well recognized as evidenced by the various Gold Medals for his academic performance along with various competitive fellowships like Monbukagakusho Scholarship, JSPS-Invitation fellowship (twice) for post-doctoral work apart from awards bestowed by professional associations. His leadership qualities are evident from scientific meetings & conferences he has helmed. He has thus far organized 2 national conferences as a Scientist, three national and one international conference as Organizing Secretary. He has >65 publications, in excess of 100 presentations at national/international conferences, 5 patents & 5 products/processes to his credit. He has been the recipient of the prestigious Prof MSS Award for Best Fisheries Scientist and the prestigious Laljee Godhoo Smarak Nidhi Award (2010). He is the fellow of society for applied biotechnology as well as Association of Food Scientists & Technologists (India). He is also the editor of various Internationally peer-reviewed Journals. He is also on the various committees dealing with education, policy formulation and research."
        },
        {
            'name':"Cristobal N. Aguilar",
            'img':"/images/Speakers/image6.png",
            'place':"Universidad Autónoma de Coahuila, Mexico",
            'topic':"Fungal biotransformation of procyanidins, a special group of bioactive molecules",
            'desc':"Prof. Cristobal N. Aguilar is Chemist (1992) by the Universidad Autonoma de Coahuila (Mexico); his MSc Program in Food Science and Biotechnology (1995) was held in the Universidad Autonoma de Chihuahua, México. His PhD Program in Fermentation Biotechnology (2000) was developed in the Universidad Autónoma Metropolitana, Mexico. He was working in a Posdoc in Biotechnology and Molecular Microbiology (2001) at IRD-Marselle, Francia. Actually, he is Dean of the School of Chemistry at Universidad Autónoma de Coahuila (2015-2018), México. Before, he was head of the Deparment of Research & Postgraduate Programs (2007-2014) and head of the Group of Bioprocesses and Natural Products of the Food Research Dept (2000- ) at the same School. Prof. Aguilar has published more than 150 papers published in JCR indexed journals, more than 35 articles in Mexican journals; 16 book chapters, 8 Mexican books, 4 editions of international books, 34 proceedings and more than 250 contributions in scientific meetings. Prof. Aguilar is a member level III of S.N.I. (Mexican System of Researchers) from 1998, receiving several prizes and awards among which the most important are: National Prize of Research 2010 of the Mexican Academy of Sciences, the Prize “young biotechnologist 2008” of the Mexican Society of Biotechnology and Bioenegineering, National Prize AgroBio-2005 and the Mexican Price in Food Science and Technology. CONACYT-Coca Cola México 2003. Prof. Aguilar has developed more than 22 research projects, including 4 international exchange projects (ECOS-Nord and alpha network-EU and Marie Curie EU). He has been advisor of 15 PhD thesis, 19 MSc thesis and 40 BSc thesis. Recently is now a regular member of the Mexican Academy of Science (2014). "
        },{
            'name':"Chiranjib Banerjee",
            'img':"/images/Speakers/image7.png",
            'place':"Indian School of Mines, Dhanbad",
            'topic':"Bio-flocculation of microalgae",
            'desc':"After completing M.Sc in Biotechnology from Vidyasagar University, West Bengal, I completed my PhD from Birla Institute of Technology, Mesra, Ranchi. Thereby I join Dept. of Environmental Science & Engineering, Indian School of Mines, Dhanbad after receiving INSPIRE Faculty Award from DST, GOI. Presently I had total 10 no. of SCI paper and also a recipient of Young Scientist Award from Association of Microbiologists of India. My research mainly focuses on bio-harvesting of microalgae using different biopolymers. "
        },{
            'name':"Deepak Pant",
            'img':"/images/Speakers/image8.png",
            'place':"Central University of HP",
            'topic':"Hybrid (chemical and biological) method for the management of E-waste",
            'desc':"Dr. Deepak Pant currently working as Dean and Head, Environmental Science, Central University of Himchal Pradesh, Dharamshala, Himachal Pradesh is the recipient of Silver Jubilee Research Fellowship award for the year 2003 by Kumaun University, Nainital (India); UCOST Young Scientist Award 2009, INSA Fallow 2010, DST-SERC Visiting Fallow 2010 and DST- SERC Young Scientist Award 2011 for his research activities. He is also the chairman of Innovation club and active member for  HP state innovation activities Dr Pant has many patents in the area of waste management by green techniques and published 10 books, 38 research papers in various national and international journals. He has guided 02 M.Phil, 04 Ph. D. thesis and 48 M. Sc. dissertations. He is in the editorial board of The Journal of Environmental Science and Sustainability (JESS)."
        },{
            'name':"Dipti Sareen",
            'img':"/images/Speakers/image9.png",
            'place':"Punjab University, Chandigarh",
            'topic':"Novel  lantibiotics: Identification and characterization",
            'desc':"I postgraduated from Panjab University, Chandigarh in Biochemistry (Hons.) in 1996. Earned my Ph.D. in Microbial Biotechnology from Institute of Microbial Technology, Chandigarh in 2001 through Independent CSIR-NET funding. Worked in the area of Mycothiol Biochemistry in a NSF funded project in Dept. of Chemistry & biochemistry, University of California, San Diego, U.S.A. from 2001-2002. Served as a guest faculty in Department of Microbiology, Barkatullah University, Bhopal from 2003-04. Worked as DST-Young Scientist in an independent project, funded by DST (SERC) from 2004-05. Joined Dept. of Biochemistry, PU, Chd. In 2005 as Assistant Prof. (Stage-I). Since then, teaching courses like Enzymes & Bioenergetics, Advanced Enzymology, Molecular Cell biology and Medicinal Biochemistry to Undergraduate and Postgraduate classes. Also, have successfully completed the DST funded project and two DBT funded projects. Following are my research interests:Industrial biotechnology: My laboratory is focusing on novel whole-cell and free-enzyme biocatalysts which could be used for the preparation of enantiopure intermediate molecules for the production of industrially important compounds. The novel enzymes encoding genes are mined from the ever-growing microbial genome database by using bioinformatics tools, followed  by their cloning, overexpression in E. coli as a host and characterization, using HPLC as the analytical tool, for their biocatalytic potential.Therapeutics: Frequent use of antibiotics has led to the emergence of antibiotic resistance in bacteria. Lantibiotic compounds are ribosomally synthesized antimicrobial peptides, against which bacteria are not able to produce resistance, hence making them a good alternative to antibiotics. Having their antimicrobial potential and a limited number, there is a need to identify novel lantibiotics.We have identified novel lantibiotic biosynthetic clusters, by screening the sequenced genomes for LanT homolog, which is a conserved lantibiotic transporter integral to type IB clusters. The strategy resulted in identification of 54 bacterial strains containing the LanT homologs, which are not the known lantibiotic producers. Of these, we could identify eight clusters having two LanM determinants, similar to haloduracin and lichenicidin. Phylogenetic analysis of these clusters suggested that they encode for putative two-component lantibiotic. In the literature, there are very few known examples of two component lantibiotics. Our study has led to the identification of 8 novel putative two-component lantibiotic clusters, which holds the potential for the discovery of more potent novel lantibiotics."
        },{
            'name':"Duu-Jong Lee ",
            'img':"/images/Speakers/image10.png",
            'place':"National Taiwan University of Technology and Science, Taiwan",
            'topic':"Inhibitory effect and interaction between silver nanoparticles and HIV-1 protease",
            'desc':""
        },{
            'name':"Emmanuel M Papamichael",
            'img':"/images/Speakers/",
            'place':"University of Ioannina, Greece",
            'topic':"Lipase-assisted production of biofuel from industrial wastes of ethanol distilleries",
            'desc':""
        },{
            'name':"Evgenia Bezirtzoglou",
            'img':"/images/Speakers/image11.png",
            'place':"Democritus University of Thrace, Greece",
            'topic':"Functional dairy foods and flora modulation",
            'desc':"Prof. Eugenia BEZIRTZOGLOU attended Biochemistry at the University of Lille (France), Hematology and Parasitology at the Medical School of Lille (France). She continued her education by obtaining a Medical Degree, a PhD Thesis (Universite Paris-Sud) and an Habilitation Degree (Universite Paris-Sud). As Medical Doctor she is specialized in Microbiology (Biopathology) and Clinical Chemistry. Furthermore, she completed her scientific knowledge by post-education studies in the Laboratory of Gastrointestinal Microbial Ecology at Karolinska Institutet and at the Reference Laboratory of Anaerobic Bacteria at UCLA, Los Angeles, USA. She has published more than 150 international publications, 20 chapters in books and 3 books and 180 International Congresses participation .She is often invited to participate in International Commitees (ECDC section enteric pathogens, European evaluation programs, PhD Thesis). Currently, she is full Professor in Microbiology at Democritus University of Thrace. Her main fields of interest include microbial ecology, gastrointestinal microflora, food and environmental microbiology."
        },{
            'name':"GA Ravishankar",
            'img':"/images/Speakers/image12.png",
            'place':"Dayananda Sagar College of Engineering, Bangalore",
            'topic':"Innovative plant biotechnological processes for the production of high-value metabolites",
            'desc':"Dr Ravishankar is presently the Professor of Biotechnology (VTU- Visvesvaraya Technological University) at Dayananda Sagar Institutions (DSI), Bengaluru. He is also the Vice President R&D in Life Sciences at (DSI) Bengaluru. He holds a position as the Chairman of Board of Studies in Biotechnology of VTU. He has also served as the Visiting Professor/ scientist to universities abroad viz. Japan, Korea, Taiwan, and Russia. He had a distinguished career as a Scientist of Council of Scientific and Industrial Research at the Central Food Technological Research Institute (CFTRI) for 28 years. His research areas include- Plant secondary metabolites, plant biotechnology, algal biotechnology, and food biotechnology and post-harvest technologies.He holds a Masters and Ph.D degree from M. S. University of Baroda. He has guided 25 students for Ph.D degree, 40 Masters Students, 4 postdocs and 6 international guest scientists from developing countries Along with his students and collaborators, Dr Ravishankar authored over 294 peer reviewed research and review papers. Over 40 patents granted in India and abroad. He is widely travelled as invited speaker in international seminars, symposia and workshops. He has presented over 235 lectures in various scientific meetings in India and abroad.Several Premier International academies and bodies honored him with fellowship Fellow of International Academy of Food Science and Technology (Canada) ; Institute of Food Technologists (USA), Institute of Food Science and Technology (UK).  He was conferred the title as Certified Food Scientist of USA."
        },{
            'name':"Guillermo Raul Castro",
            'img':"/images/Speakers/image13.png",
            'place':"National University of La Plata, Argentina",
            'topic':"Micro- and nano-biocarriers for molecular transport",
            'desc':"MSc. and Ph.D. in Chemistry (Universidad de Buenos Aires, Argentina), Postdoc positions at Massachusetts Institute of Technology (US) and Tufts University (Boston, US), later Adjunct Professor in the Dept Biomedical Eng., Tufts University (USA). Present positions: P.I. (Natl Res Council (CONICET, Argentina); Full Professor, School of Sciences, National University of La Plata (UNLP, Argentina). Director of Nanobiomaterials Laboratory, Institute of Applied Biotechnology (CINDEFI, Argentina). Scientific production: 4 patents, more than 100 papers and book chapters. Areas of interest: biopolymers, biocatalysis, molecular controlled release, tissue engineering."
        },{
            'name':"Harvinder Singh Saini",
            'img':"/images/Speakers/image14.png",
            'place':"Guru Nanak Dev University, Amritsar",
            'topic':"Reduction of halogenated acetophenone derivatives by Pseudomonas sp (AP1): Comparing the efficiency of biological and chemical surfactants for improving yield of chiral synthons",
            'desc':" I joined as Assistant Professor in Department of Microbiology, GNDU, Amritsar in 1991 and continuing as Professor since 2008. The work being pursued in research group relates to exploration of metabolic potential of microbial diversity for its ability to transform organic compounds ranging from textile dyes to halogenated organic compounds, biosurfactant production and synthesis of chiral alcohols from ketones and their halo-substituted derivatives. The research work has been funded by grants from funding agencies of Government of India like UGC, DBT and CSIR. The work has been published in the form of approximately 60 papers in International journals and three book chapters."
        },{
            'name':"In Seop Chang",
            'img':"/images/Speakers/image15.png",
            'place':"Gwangju Institute of Science and Technology",
            'topic':"Energy metabolism of carbon monoxide utilizingacetogens and biochemical productions",
            'desc':"In Seop Chang is a Full Professor at Gwangju Institute Science and Technology (GIST). His research interest mainly focus on Nano-Micro-Macro integrated system of bioelectrochemical reaction. He investigates interaction of nano-sized biomolecule, micro-sized microorganism and their electron transfer activity, an interaction with electrodes, which finally applied to macro-system, in order to optimise and maximise the efficiency of electricity generation in microbial and enzymatic fuel cell to real field application."
        },{
            'name':"Jeyaprakash Rajendhran",
            'img':"/images/Speakers/image16.png",
            'place':"Madurai Kamaraj University, Madurai",
            'topic':"Genomic insights into the biofilm formation by Pseudomonas aeruginosa PAO1 ",
            'desc':"Dr. J. Rajendhran obtained his Ph.D from Madurai Kamaraj University and had Postdoctoral studies at studies at Yale University, USA. His research is mainly focused on genomics of pathogens, metagenomics and human microbiomics. He had sequenced more than 25 bacterial strains of industrial and clinical importance. He identified several genes coding for industrial enzymes and antibiotics from various metagenome sources. Dr. Rajendhran has published 70 papers. He is a recipient of Young Scientist award from Association of Microbiologists of India, UGC-Raman postdoctoral fellowship to work in USA and SBS-MKU Genomics award from BRSI."
        },{
            'name':"Jega Jegatheesan",
            'img':"/images/Speakers/image17.png",
            'place':"RMIT University, Australia",
            'topic':"Application of membrane bioreactor (MBR) for the treatment of persistent pollutants: Textile effluent - a case study",
            'desc':""
        },{
            'name':"Jyoti Jadhav",
            'img':"/images/Speakers/image18.png",
            'place':"Shivaji University, Kolhapur",
            'topic':"Surface plasmon resonance for characterization of enzyme inhibitors",
            'desc':""
        },{
            'name':"Jose Teixeira",
            'img':"/images/Speakers/image19.png",
            'place':"Universidade do Minho, Portugal",
            'topic':"Developments in the production of 2nd generation bioethanol",
            'desc':"José António Teixeira is Professor at Biological Engineering Department, University of Minho. He has a degree in Chemical Engineering from University of Porto (1980) and a PhD in Chemical Engineering also from University of Porto (1988).His main research interests are Industrial Biotechnology (bioprocess development for the transformation of lignocellulosic materials into 2nd generation bioethanol and chemicals; valorisation of agro-industrial residues; bioreactor development and Food Biotechnology (non-conventional food processing; edible films for packaging; process development). He is the author/co-author of over 450 peer reviewed papers (http://orcid.org/0000-0002-4918-3704 )"
        },{
            'name':"Jo-Shu Chang",
            'img':"/images/Speakers/image20.png",
            'place':"National Cheng Kung University, Taiwan",
            'topic':"Biorefinery concepts on CO2 reutilization via microalgae platform",
            'desc':"Dr. Jo-Shu Chang is Deputy Director of Research Center for Energy Technology and Strategy and University Chair Professor of Department of Chemical Engineering at National Cheng Kung University, Taiwan. He received his Ph.D. degree from University of California, Irvine (USA) in 1993. His research interests cover biochemical engineering, environmental biotechnology and applied microbiology with a recent focus on microalgae-based CO2 reutilization, biofuels production, and biorefineries. He is fellow of American Institute of Medical and Biological Engineering (AIMBE) and has received numerous prestigious domestic and international academic awards. He has published nearly 350 SCI-indexed journal papers (including twelve ISI Hi-Ci papers) with a total citation of over 10,000 times and an h-index (Web of Science) of 52. He also serves as executive committee member of Asia Federation of Biotechnology (AFOB)."
        },{
            'name':"K Pandima Devi",
            'img':"/images/Speakers/image21.png",
            'place':"Alagappa University, Karaikudi",
            'topic':"Multi-targeted neurotherapeutics against Alzheimer's disease: Evaluating the role of Grewia tiliaefolia and its active constituent in preventing Aβ induced proteotoxicity",
            'desc':""
        },{
            'name':"Kanti Bhooshan Pandey",
            'img':"/images/Speakers/image22.png",
            'place':"CSIR-Central Salt & Marine Chemicals Research Institute, Bhavnagar",
            'topic':"Regulation of erythrocyte membrane transporters by resveratrol: Implications for human aging",
            'desc':""
        },{
            'name':"Kavita Shah",
            'img':"/images/Speakers/image23.png",
            'place':"Banaras Hindu University, Varanasi",
            'topic':"Environmental biotechnology and innovations in era of changing climate",
            'desc':""
        },{
            'name':"Kalpana Joshi",
            'img':"/images/Speakers/image24.png",
            'place':"Sinhgad College of Engineering, Vadgaon, Maharashtra",
            'topic':"Pharmacogenomic of RA",
            'desc':""
        },{
            'name':"Li Shu",
            'img':"/images/Speakers/image25.png",
            'place':"Deakin University, Australia",
            'topic':"Comparison of aerobic and anaerobic degradation of textile dyes",
            'desc':""
        },{
            'name':"Loulouda Bosnea",
            'img':"/images/Speakers/image26.png",
            'place':"University of Patras, Greece",
            'topic':"Microbial encapsulation for food production",
            'desc':""
        },{
            'name':"Madhavan Nampoothiri",
            'img':"/images/Speakers/image27.png",
            'place':"CSIR-NIIST, Trivandrum",
            'topic':"Corynebacterium glutamicum  as a potent biocatalyst for the bioconversion of pentose sugars to value added products",
            'desc':""
        },{
            'name':"Maria Kanellaki",
            'img':"/images/Speakers/image28.png",
            'place':"University of Patras, Greece",
            'topic':"Extremely low temperature fermentations for food production using biotacalysts prepared using solid wastes of food industry",
            'desc':""
        },{
            'name':"Munish Puri ",
            'img':"/images/Speakers/image29.png",
            'place':"Deakin University, Australia",
            'topic':"Lignocellulose biomass processing for producing high value algal bioactives",
            'desc':""
        },{
            'name':"Monika Garg",
            'img':"/images/Speakers/image30.png",
            'place':"National Agri-Food Biotechnology Institute, Mohali",
            'topic':"Nutraceutical colored wheat ",
            'desc':""
        },{
            'name':"Monisha Dhiman",
            'img':"/images/Speakers/image31.png",
            'place':"Central University of Punjab, Bhatinda",
            'topic':"Role of mitochondia in doxorubicin induced cardio-toxicity",
            'desc':""
        },{
            'name':"Neelam Sangwan",
            'img':"/images/Speakers/image32.png",
            'place':"CSIR-CentralInstitute of Medicinal & Aromatic Plants, Lucknow",
            'topic':"Biotechnological approaches for understanding withanolide biosynthesis and regulation in Withania somnifera",
            'desc':""
        },{
            'name':"N Manickam",
            'img':"/images/Speakers/image33.png",
            'place':"CSIR-Indian Institute of Toxicology Research",
            'topic':"Comparative metagenomic, phylogenetic and functional analyses of microbial communities from the Ganges River Ecosystems",
            'desc':""
        },{
            'name':"Nasreen Munshi",
            'img':"/images/Speakers/image34.png",
            'place':"Nirma University, Ahmedabad",
            'topic':"Hydrocarbon degradation by Pseudomonas citronellolis, the most abundant bacteria in common industrial effluent treatment plants",
            'desc':""
        },{
            'name':"Pawan K. Dhar",
            'img':"/images/Speakers/image35.png",
            'place':"Jawaharlal Nehru University, New Delhi",
            'topic':"Synthetic Biology: concepts, challenges and opportunities",
            'desc':""
        },{
            'name':"Patrick C. Hallenbeck",
            'img':"/images/Speakers/image36.png",
            'place':"University of Montreal, Canada",
            'topic':"Boosting microalgal lipid production through mixotrophy",
            'desc':""
        },{
            'name':"P Binod",
            'img':"/images/Speakers/image37.png",
            'place':"CSIR-NIIST, Trivandrum",
            'topic':"Bio-based process for the production of industrially important platform chemicals",
            'desc':""
        },{
            'name':"Prakasham Reddy Shetty",
            'img':"/images/Speakers/image38.png",
            'place':"CSIR-Indian Institute of Chemical Technology, Hyderabad",
            'topic':"Microbial glucans and their application potential in biomedical sector",
            'desc':""
        },{
            'name':"PN Rangarajan",
            'img':"/images/Speakers/image39.png",
            'place':"Indian Institute of Science, Bangalore",
            'topic':"New insights into the regulation of metabolic pathways in the methylotrophic yeast, Pichia pastoris",
            'desc':""
        },{
            'name':"Poonam Singh Nigam",
            'img':"/images/Speakers/image40.png",
            'place':"University of Ulster, UK",
            'topic':"Polymer Ratio and Concentration effect on viability of encapsulated Probiotic bacteria in complex coacervates",
            'desc':""
        },{
            'name':"Pratyoosh Shukla ",
            'img':"/images/Speakers/image41.png",
            'place':"Maharshi Dayanand University",
            'topic':"Computational modeling, systems biology and novel platform design approaches for microbial enzymes",
            'desc':""
        },{
            'name':"P. Mullai",
            'img':"/images/Speakers/image42.png",
            'place':"Annamalai University, Karaikudi, Tamil Nadu",
            'topic':"Residence time distribution studies in hybrid upflow anaerobic sludge blanket reactor treating textile wastewater",
            'desc':""
        },{
            'name':"Papita Das",
            'img':"/images/Speakers/image43.png",
            'place':"Jadavpur University, Kolkata",
            'topic':"Application of fungi for nanoparticle synthesis and sequestration of heavy metals from wastewater",
            'desc':""
        },{
            'name':"Rajanish Giri",
            'img':"/images/Speakers/image44.png",
            'place':"Indian Institute of Technology, Mandi",
            'topic':"Intrinsically disordered proteins: What we learnt from transition state structures?",
            'desc':""
        },{
            'name':"Rajesh Rastogi",
            'img':"/images/Speakers/image45.png",
            'place':"Sardar Patel University, Gujarat",
            'topic':"Natural UV-sunscreens from cyanobacteria and their potential application as cosmeceuticals",
            'desc':""
        },{
            'name':"Reeta Rani Singhania",
            'img':"/images/Speakers/image46.png",
            'place':"Indian Oil Corporation Limited, Faridabad",
            'topic':"Cellulase production: Challenges and future perspective for biorefinery",
            'desc':""
        },{
            'name':"Ramaraj Boopathy",
            'img':"/images/Speakers/image47.png",
            'place':"Nicholls State University, USA",
            'topic':"Presence of antibiotic resistant bacteria and antibiotic resistance genes in the aquatic environment",
            'desc':""
        },{
            'name':"Renu Wadhwa",
            'img':"/images/Speakers/image48.png",
            'place':"National Institute of Advanced Industrial Science and Technology(AIST)), Tsukuba, Japan",
            'topic':"Stress chaperone mortalin - Discovery to drug target",
            'desc':"Dr. Wadhwa has two PhDs (from India and Japan) and post-doctoral training from England and Japan.  For last 27 years, her major research interest is to understand the biology of aging and cancer using normal and cancer cells.  She first cloned Hsp70 family protein, mortalin, and has over 190 publications with many invited/plenary talks.  She is a Prime Senior Scientist and leader of DBT-AIST International Laboratory for Advanced Biomedicine at AIST, Japan.  She has honorary positions at Univ. of Sydney (Australia) and Hanyang University (Korea). She is a Fellow of Geriatric Society of India and Indian Academy of Neurosciences."
        },{
            'name':"Roger Ruan",
            'img':"/images/Speakers/image49.png",
            'place':"University of Minnesota, USA",
            'topic':"Environment-enhancing biofuel and biobased byproduct production through innovative waste-to-algae technologies",
            'desc':""
        },{
            'name':"R B Subramanian ",
            'img':"/images/Speakers/",
            'place':"Sardar Patel University, Gujarat",
            'topic':"Molecular Responses of Plants to Biotic and Abiotic Stress",
            'desc':""
        },{
            'name':"Samir Kumar Khanal",
            'img':"/images/Speakers/image50.png",
            'place':"University of Hawai’i at Māna, Honolulu, USA",
            'topic':"Anaerobic digestion of high yield energy crops for bioenergy production",
            'desc':""
        },{
            'name':"S. Renganathan",
            'img':"/images/Speakers/image51.png",
            'place':"Anna University, Chennai",
            'topic':"Biofuel production from marine macroalgae",
            'desc':""
        },{
            'name':"Sunil Kaul",
            'img':"/images/Speakers/image52.png",
            'place':"National Institute of Advanced Industrial Science and Technology(AIST)), Tsukuba, Japan",
            'topic':"Active ingredients enriched ashwagandha leaves: Benefits, bioactives, biology and biotechnology",
            'desc':""
        },{
            'name':"Sudipta De",
            'img':"/images/Speakers/image53.png",
            'place':"Jadvapur University, Kolkata",
            'topic':"Sustainable energy solution through efficient system integration and utilizing local resources: technological, economic and environmental feasibility assessment in Indian context",
            'desc':""
        },{
            'name':"Sunil Kumar",
            'img':"/images/Speakers/image54.png",
            'place':"CSIR-National Environmental Engineering Research Institute, Nagpur",
            'topic':"Solid waste management and Biotechnology ",
            'desc':""
        },{
            'name':"Sudhir Singh",
            'img':"/images/Speakers/image55.png",
            'place':"Center of Innovative and Applied Bioprocessing, Mohali",
            'topic':"Transformation of fruit and vegetable residues in functional products",
            'desc':""
        },{
            'name':"Sujata Upadhyaya",
            'img':"/images/Speakers/image56.png",
            'place':"Sikkim University, Sikkim",
            'topic':"Recent advances in micropropagation of temperate and subtropical fruit crops",
            'desc':""
        },{
            'name':"Ulrika Rova",
            'img':"/images/Speakers/image57.png",
            'place':"Lulea University of Technology, Sweden",
            'topic':"Algae as production systems of bioactive compounds from forest biomass",
            'desc':""
        },{
            'name':"Vinod Kumar",
            'img':"/images/Speakers/image58.png",
            'place':"Center of Innovative and Applied Bioprocessing, Mohali",
            'topic':"Microbial production of xylitol from agro waste residues: Current status and future perspectives",
            'desc':""
        },{
            'name':"Vinod Kumar Garg",
            'img':"/images/Speakers/image59.png",
            'place':"Central University of Punjab, Bhatinda",
            'topic':"Potential of vermitechnology for nutrient recovery and organic waste recycling",
            'desc':""
        },{
            'name':"Vitor Vasconcelos",
            'img':"/images/Speakers/image60.png",
            'place':"CIIMAR, Porto University, Portugal",
            'topic':"Cyanobacteria secondary metabolites with biotechnological applications: new approaches using ancient organisms",
            'desc':""
        },{
            'name':"Wan Azlina Ahmad",
            'img':"/images/Speakers/image61.png",
            'place':"Universiti Teknologi Malaysia, Malaysia",
            'topic':"Production of bacterial pigments in low cost medium and formulation of biodegradable ink",
            'desc':""
        },{
            'name':"Yusup Suzana",
            'img':"/images/Speakers/image62.png",
            'place':"Universiti Teknologi PETRONAS, Malayasia",
            'topic':"Relative yield efficieny of high free fatty acid rubber seed (Hevea brasiliensis) oil via hydrodynamic cavitation technology",
            'desc':""
        },{
            'name':"You Kwan Oh",
            'img':"/images/Speakers/image63.png",
            'place':"Korea Institute of Energy Research, Seoul, South Korea",
            'topic':"Multifunctional nano/micro-particle engineering for microalgal biorefinery",
            'desc':""
        },{
            'name':"Zainul Akmar Zakaria",
            'img':"/images/Speakers/image64.png",
            'place':"Universiti Teknologi Malaysia",
            'topic':"Growth improvement of banana and oil palm seedlings using locally isolated nitrogen fixing and phosphate solubilizing bacteria",
            'desc':""
        },
        {
            'name':"Sambasivam Periyannan ",
            'img':"/images/Speakers/image1.jpeg",
            'place':"CSIRO, Canberra, Australia ",
            'topic':"Current trends in cloning disease resistance genes in plants",
            'desc':""
        },
        {
            'name':"Kaustabh Kumar Maiti  ",
            'img':"",
            'place':"NIIST, Trivandrum",
            'topic':"New Insight of Surface Enhanced Raman Scattering (SERS) Nano-Probe for Spectroscopic Detection and Bioimaging of Human Cancer",
            'desc':""
        }
        ,
        {
            'name':"Asad U Khan ",
            'img':"/images/Speakers/image2.jpeg",
            'place':"Aligarh Muslim University, Aligarh ",
            'topic':"Defining the Structural design of b-lactamses: antibiotic resistance mechanism",
            'desc':""
        }
        ,
        {
            'name':"M. Sudhakara Reddy ",
            'img':"/images/Speakers/image3.jpeg",
            'place':"Thapar University, Patiala, Punjab",
            'topic':"Cloning and Characterization of Glutathione Synthesizing Genes in Ectomycorrhizal Fungi and their Role in Metal Tolerance",
            'desc':""
        }
        ,
        {
            'name':"T. Satyanarayana ",
            'img':"/images/Speakers/image4.jpeg",
            'place':"University of Delhi South Campus, New Delhi",
            'topic':"Molecular Approaches for Improving Production and Caralytic Efficiency of Acidic Α-Amylase of the Acidophilic Bacterium Bacillus acidicola",
            'desc':""
        } ,
        {
            'name':"Soumya Mukherjee,",
            'img':"/images/Speakers/image65.png",
            'place':"Indian Jute Industries' Research Association, Kolkata",
            'topic':"Tricking Arthrinium malaysianum into Producing Industrially Important Enzymes Under 2-Deoxy D-Glucose Treatment",
            'desc':""
        }
        ,
        {
            'name':"MADHYASTHA HARISHKUMAR ",
            'img':"/images/Speakers/image66.jpeg",
            'place':"University of Miyazaki, JAPAN",
            'topic':"Arsenicosis in dermal and neuronal perspective: An Update.",
            'desc':""
        },
        {
            'name':"Suresh Kumar Dubey",
            'img':"/images/Speakers/",
            'place':"Banaras Hindu University, Varanasi",
            'topic':"Molecular ecological perspective of methanogenic archael comminity in rice agroecosystem",
            'desc':""
        },
        {
            'name':"Veeriah Jegatheesan",
            'img':"/images/Speakers/",
            'place':"RMIT University, Australia",
            'topic':"Application of membrane bioreactor (MBR) for the treatment of persistent pollutants: Textile effluent - a case study",
            'desc':"Professor Veeriah Jegatheesan (Jega) has 20 years of experience in water; his research interests are water and wastewater treatment, resource recovery and mathematical modeling. Jega has extensive experience in membrane bioreactors (MBRs) for the treatment of persistent pollutants, heavy metals and car wash wastewater. Recently he is working on membrane crystallization for the recovery of minerals from concentrate and also on forward osmosis to improve water recovery and pre-treatment sludge volume reduction in reverse osmosis process employed for desalination. He is the chief editor for a book series on “Applied Environmental Science and Engineering for a Sustainable Future” published by Springer."
        },
        {
            'name':"Suzana Ferreira-Dias",
            'img':"/images/Speakers/",
            'place':"Universidade de Lisboa, Portugal",
            'topic':"Towards sustainable production of dietic lipids and human milk fat substitutes for the food industry",
            'desc':"Suzana Ferreira Dias is Professor of the Instituto Superior de Agronomia (ISA, School of Agriculture), University of Lisbon, Portugal, since 1994. Her main research is centred in the field of Food Engineering, focused on Technology/Biotechnology of Oils and Fats, mainly on the development and optimization of enzyme-catalysed processes alternative to the conventional processes for the production of (i) functional structured lipids, (ii) food flavours (iii) food emulsifiers and (iv) biodiesel, using edible and non-edible oils, (v) olive oil characterization and extraction technology,  (vi) lipid oxidation and (vii) sensory analysis for quality control and development of foods. She has more than 250 publications/communications, which include 3 patents, 79 original and review publications reported in ISI web of knowledge, 8 chapters in international books, 12 chapters in Portuguese books, 42 papers in congress proceedings, etc. Since 2010, she is associate-editor of the Journal of the American Oil Chemists Society. In 2003, she was recognized as specialist in Food Engineering, by the Portuguese Professional Association of Engineers and, since 2016, she is member of the council of Food Engineering Specialists of this association."
        },
        {
            'name':"Suren Singh",
            'img':"/images/Speakers/",
            'place':"Durban University of Technology, South Africa",
            'topic':"Agricultural waste as potential biomass for xylooligosaccharide production",
            'desc':"Professor Suren Singh is a Full Professor in the Department of Biotechnology and Food Technology, Faculty of Applied Sciences at the Durban University of Technology. He heads a vibrant Enzyme Technology Research Group, which focuses on the production and application of thermostable enzymes important for the food, detergent, textile, pulp and paper industries and the environment. His group has produced numerous “world firsts” with his hot loving fungus Thermomyces lanuginosus, the genome sequence being one of them. He has published more than 70 journals/publications and 40 international conference presentations."
        }

    ];

};
controllers.sponsors = function($scope){
    $scope.dates = dates;
};
app.controller(controllers);
