/**
 * Created by Shivam Mathur on 17-02-2016.
 */
var controllers = {};
controllers.header =  function($scope){};
controllers.main = function($scope){
    $(document).ready(function(){
        $('.slider').slider({full_width: true});
    });
    $('.indicators').css('padding-bottom','3.5em').css('z-index','10');
};
controllers.register = function($scope){


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
controllers.paperGeneral = function(){};
controllers.paperAbstracts = function(){};
controllers.paperFull = function(){};
controllers.invite =function($scope){

};
controllers.committees = function($scope){
    $(document).ready(function(){
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
    });
    var set1 = {
        "name":" National Steering Committee",
        "committee":[
            {
                "name":"Datta, Asis",
                "institute":"National Institute of Plant Genomics Research, New Delhi"
            },
            {
                "name":"Gaikaiwari, Raghavendra",
                "institute":"Hi-Tech Biosciences Ltd, Pune"
            },
            {
                "name":"Ghosh, Amit",
                "institute":"National Institute of Cholera and, Enteric Diseases, Kolkata   "
            },
            {
                "name":"Kumar, Rakesh",
                "institute":"National Environmental Engineering Research Institute, Nagpur"
            },
            {
                "name":"Kumar, Sanjay",
                "institute":"CSIR-Institute of Himalayan Bioresource Technology, Palampur"
            },
            {
                "name":"Nautiyal, Chandra Shekhar",
                "institute":"CSIR-National Botanical Research Institute, Lucknow"
            },
            {
                "name":"Nuna, Sheel",
                "institute":"QUT South Asia Office, New Delhi"
            },
            {
                "name":"Padmanaban, G",
                "institute":"Indian Institute of Science, Bangalore"
            },
            {
                "name":"Palakhiwala, Piyush",
                "institute":"Maps Enzymes Ltd, Ahmadabad"
            },
            {
                "name":"Sahoo, Dinabandhu",
                "institute":"Institute of Bioresources and Sustainable Development, Imphal"
            },
            {
                "name":"Sangwan, Rajender S",
                "institute":"Centre for Innovative and Applied Bioprocessing, Mohali"
            },
            {
                "name":"Yadav, JS",
                "institute":"Indian Institute of Chemical Technology, Hyderabad"
            }
        ]
    };
    var set2 = {
        "name":" National Organizing Committee",
        "committee":[
            {
                "name":"Agarwal, Avinash Kumar",
                "institute":"National Institute of Plant Genomics Research, New Delhi"
            },
            {
                "name":"Agarwal, Sunil",
                "institute":"Department of Science and Technology, GoI, New Delhi"
            },
            {
                "name":"Agarwal, Vivek",
                "institute":"CDC India, Jaipur"
            },
            {
                "name":"Agasar, Dayanand",
                "institute":"Gulbarga University, Gulbarga"
            },
            {
                "name":"Banerjee, Moinak",
                "institute":"Rajeev Gandhi Centre for Biotechnology, Trivandrum"
            },
            {
                "name":"Baskar, Gurunathan",
                "institute":"St Joseph’s College, Chennai"
            },
            {
                "name":"Bhaskar, Thallada",
                "institute":"CSIR-Indian Institute of Petroleum, Dehradun"
            },
            {
                "name":"Binod, P",
                "institute":"CSIR-National Institute for Interdisciplinary S&T, Trivandrum"
            },
            {
                "name":"Chadha, Bhupinder S ",
                "institute":"Guru Nanak Dev University, Amritsar"
            },
            {
                "name":"Chanakya, Visvanatha",
                "institute":"Gandhi Institute of Technology and Management, Visakhapatnam"
            },
            {
                "name":"De, Sudipta",
                "institute":"Jadavpur University, Kolkata"
            },
            {
                "name":"Dharmpalan, Biju",
                "institute":"MACFAST, Thiruvalla"
            },
            {
                "name":"Dubey, Suresh Kumar",
                "institute":"Banaras Hindu University, Varanasi"
            },
            {
                "name":"Garg, Vinod K",
                "institute":"Central University of Punjab, Bhatinda"
            },
            {
                "name":"Govindwar, Sanjay P ",
                "institute":"Shivaji University, Kolhapur"
            },
            {
                "name":"Kataki, Rupam",
                "institute":"Tezpur University, Tezpur"
            },
            {
                "name":"Khare, Sunil K",
                "institute":"Indian Institute of Technology, New Delhi"
            },
            {
                "name":"Kuhad, Ramesh C",
                "institute":"Central University of Haryana, Mahendergarh"
            },
            {
                "name":"Kumar, Sunil",
                "institute":"CSIR-National Environmental Eng Research Institute, Nagpur"
            },
            {
                "name":"Lele, Smita",
                "institute":"Institute of Chemical Technology, Mumbai"
            },
            {
                "name":"Mohan, S Venkata",
                "institute":"CSIR-Indian Institute of Chemical Technology, Hyderabad"
            },
            {
                "name":"Mondal, Keshab C",
                "institute":"Vidyasagar University, Midnapore"
            },
            {
                "name":"Nampoothiri, Madhavan K",
                "institute":"CSIR-National Institute for Interdisciplinary S&T, Trivandrum"
            },
            {
                "name":"Nawani, Neelu",
                "institute":"Dr DY Patil Institute of Biotechnology & Bioinformatics, Pune"
            },
            {
                "name":"Pandey, DM",
                "institute":"BITS, Mesra, Ranch"
            },
            {
                "name":"Pandian, SK",
                "institute":"Alaggappa University,Karaikudi"
            },
            {
                "name":"Pant, Deepak",
                "institute":"Central University of Himachal Pradesh, Dharamshala"
            },
            {
                "name":"Prasad, RBN",
                "institute":"CSIR-Indian Institute of Chemical Technology, Hyderabad"
            },
            {
                "name":"Praveenkumar, Ramanujam",
                "institute":"Arunai Engineering College, Thiruvannamalai"
            },
            {
                "name":"Ramachandran, KB",
                "institute":"Indian Institute of Technology, Chennai"
            },
            {
                "name":"Rangarajan, PN",
                "institute":"Indian Institute of Science, Bangalore"
            },
            {
                "name":"Sangwan, Rajender S",
                "institute":"Centre for Innovative and Applied Bioprocessing, Mohali"
            },
            {
                "name":"Sankaran, Krishnan",
                "institute":"Anna University, Chennai"
            },
            {
                "name":"Sarangan, Swaroop",
                "institute":"Reliance Industries Ltd, Mumbai"
            },
            {
                "name":"Satyanarayana, Tulsi",
                "institute":"University of Delhi, New Delhi"
            },
            {
                "name":"Singh, Durg V ",
                "institute":"Institute of Life Sciences, Bhubaneswar"
            },
            {
                "name":"Singh, Ram S",
                "institute":"Punjabi University, Patiala"
            },
            {
                "name":"Srivastava, Sangeeta",
                "institute":"Godawari Biorefineries Ltd, Mumbai"
            },
            {
                "name":"Sukumaran, Rajeev K",
                "institute":"CSIR-National Institute for Interdisciplinary S&T, Trivandrum"
            },
            {
                "name":"Tamang, Jyoti P ",
                "institute":"Sikkim University, Gangtok"
            },
            {
                "name":"Thakur, Indu S",
                "institute":"Jawaharlal Nehru University, New Delhi"
            },
            {
                "name":"Upadhyay, Siddha N ",
                "institute":"Banaras Hindu University, Varanasi"
            },
            {
                "name":"Wangikar, Pramod K",
                "institute":"Indian Institute of Technology, Mumbai"
            }
        ]
    };
    var set3 = {
        "name":" International Advisory Committee",
        "committee":[
            {
                "name":"Bhoopathy, Raj",
                "institute":"University of Nicholls, USA"
            },
            {
                "name":"Castro, Guillermo R",
                "institute":"Universidad Nacional de La Plata, La Plata, Argentina"
            },
            {
                "name":"Chang, In Seop",
                "institute":"Gwangju Institute of Science and Technology, Gwangju, South Korea"
            },
            {
                "name":"Chang, Jo Shu",
                "institute":"National Cheng Kung University, Taiwan"
            },
            {
                "name":"Dosoretz, Carlos",
                "institute":"Technicon, Israel Institute of Technology, Haifa, Israel"
            },
            {
                "name":"Ferreira-Dias, Suzana",
                "institute":"Technical University of Lisbon, Lisbon, Portugal"
            },
            {
                "name":"Gnansonou, Edgard",
                "institute":"École Polytechnique Fédérale de Lausanne (EPFL), Lausanne, Switzerland"
            },
            {
                "name":"Janecek, Stefan",
                "institute":"Institute of Molecular Biology, Slovak Academy of Sciences, Bratislava, Slovakia"
            },
            {
                "name":"Kaul, Sunil C ",
                "institute":"National Institute of Advanced Industrial Science & Technology, Japan"
            },
            {
                "name":"Khanal, Samir ",
                "institute":"University of Hawaii at Mãnoa, Honolulu, Hawaii, USA"
            },
            {
                "name":"Kondo, Akihiko",
                "institute":"Kobe University, Kobe, Japan"
            },
            {
                "name":"Larroche, Christian",
                "institute":"Universite Blaise Pascal, Clermont Ferrand, France"
            },
            {
                "name":"Lee, Duu Jong",
                "institute":"National Taiwan University, Taipei, Taiwan"
            },
            {
                "name":"Lee, Keat Teong ",
                "institute":"Universiti Sains Malaysia, Pulau Pinang, Malaysia"
            },
            {
                "name":"Ngo, Hao Huu  ",
                "institute":"University of Technology, Sydney, Australia"
            },
            {
                "name":"Nigam, Poonam ",
                "institute":"University of Ulster, Coleraine, Co. Londonderry, Northern Ireland, UK"
            },
            {
                "name":"Papamichael, Emmanuel M ",
                "institute":"University of Ioannina, Greece"
            },
            {
                "name":"Park, Jong Moon ",
                "institute":"Pohang University of Science and Technology, Pohang, Gyeongbuk, South Korea"
            },
            {
                "name":"Ruan, Roger ",
                "institute":"University of Minnesota, USA"
            },
            {
                "name":"Sanroman, Maria Angeles",
                "institute":"Universidad de Vigo, Vigo, Spain"
            },
            {
                "name":"Saucedo-Castaneda, Gerardo",
                "institute":"Universidad Autónoma Metropolitana-Iztapalapa, México"
            },
            {
                "name":"Soccol, Carlos Ricardo",
                "institute":"Federal University of Parana, Curitiba, Brazil"
            },
            {
                "name":"Tahezadeh, Mohammad",
                "institute":"University of Borås, Borås, Sweden"
            },
            {
                "name":"Tyagi, Rajeshwar Dayal",
                "institute":"INRS, Quebec, Canada"
            },
            {
                "name":"Visvanathan, C ",
                "institute":"Asian Institute of Technology, Klongluang, Pathumthani, Thailand"
            },
            {
                "name":"Wong, Jonathan",
                "institute":"Hong Kong Baptist University, Hong Kong"
            }
        ]
    };
    var set4 = {
        "name":"Local Working Committee",
        "committee":[
            {
                "name":"Dr. M.Rasool",
                "institute":"Organizing Secretary"
            },
            {
                "name":"Dr. K.Ramanathan",
                "institute":"Organizing Secretary"
            },
            {
                "name":"Dr. M.Arabi Saleh",
                "institute":"Organizing Secretary"
            },
            {
                "name":"Dr.  Arnold Ememerson",
                "institute":"Organizing Secretary"
            },
            {
                "name":"Dr. V. Mohana Srinivasan",
                "institute":"Organizing Secretary"
            },
            {
                "name":"Dr. A. Sivakumar",
                "institute":"Joint Secretary"
            },
            {
                "name":"Dr. Febin Prabhudass",
                "institute":"Joint Secretary"
            },
            {
                "name":"Dr. S.Vino",
                "institute":"Joint Secretary"
            },
            {
                "name":"Dr.K.Suthindiran",
                "institute":"Joint Secretary"
            },
            {
                "name":"Dr. Jabaz Osborne",
                "institute":"Joint Secretary"
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
                'EB 7 Biohydrogen'
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
controllers.accommodation =function(){};
controllers.venue =function(){
    initMap();
};
controllers.awards =function(){};
controllers.exhibition =function(){};
controllers.posters =function(){};
controllers.socialPrograms =function(){};
controllers.ads =function($scope){
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
    $scope.speakers = [
        {
            'name':"A. A. Koutinas",
            'img':"/images/Speakers/image1.png",
            'place':"University of Patras, Greece",
            'topic':"Development of a new generation nano-tubesfrom tubular cellulose after its hydrolysis with cellulasses"
        },
        {
            'name':"Apostolis Koutinas",
            'img':"/images/Speakers/image2.png",
            'place':"Agricultural University Athens, Greece",
            'topic':"Biorefinery development for the production of bio-based chemicals and polymers using food industry side streams"
        },
        {
            'name':"Aikaterini Alexiou Chatzaki",
            'img':"/images/Speakers/",
            'place':"Democritus University of Thrace, Greece",
            'topic':"Gene promoter methylation and protein expression of BRMS1 gene in uterine cervix in relation to high-risk HPV infection and cervical cancer"
        },
        {
            'name':"Ashwani Kumar",
            'img':"/images/Speakers/image3.png",
            'place':"Dr HSG University, Sagar",
            'topic':"Rhizosphere microbiome: Tool for understanding an engineering plant-microbe interaction"
        },
        {
            'name':"Atya Kapley",
            'img':"/images/Speakers/image4.png",
            'place':"CSIR-National Environmental Engineering Research Institute, Nagpur",
            'topic':"Water management: Sharing perspective"
        },{
            'name':"Bhaskar Narayan",
            'img':"/images/Speakers/image5.png",
            'place':"CSIR-Central Food Technological Research Institute, Mysore",
            'topic':"Bio-TIPS for recovery of utilizable biomolecules from solid wastes from fish/meat processing industries"
        },
        {
            'name':"Cristobal N. Aguilar",
            'img':"/images/Speakers/image6.png",
            'place':"Universidad Autónoma de Coahuila, Mexico",
            'topic':"Fungal biotransformation of procyanidins, a special group of bioactive molecules"
        },{
            'name':"Chiranjib Banerjee",
            'img':"/images/Speakers/image7.png",
            'place':"Indian School of Mines, Dhanbad",
            'topic':"Bio-flocculation of microalgae"
        },{
            'name':"Deepak Pant",
            'img':"/images/Speakers/image8.png",
            'place':"Central University of HP",
            'topic':"Hybrid (chemical and biological) method for the management of E-waste"
        },{
            'name':"Dipti Sareen",
            'img':"/images/Speakers/image9.png",
            'place':"Punjab University, Chandigarh",
            'topic':"Novel  lantibiotics: Identification and characterization"
        },{
            'name':"Duu-Jong Lee ",
            'img':"/images/Speakers/image10.png",
            'place':"National Taiwan University of Technology and Science, Taiwan",
            'topic':"Inhibitory effect and interaction between silver nanoparticles and HIV-1 protease"
        },{
            'name':"Emmanuel M Papamichael",
            'img':"/images/Speakers/",
            'place':"University of Ioannina, Greece",
            'topic':"Lipase-assisted production of biofuel from industrial wastes of ethanol distilleries"
        },{
            'name':"Eugenia Bezirtzoglou",
            'img':"/images/Speakers/image11.png",
            'place':"Democritus University of Thrace, Greece",
            'topic':"Functional dairy foods and flora modulation"
        },{
            'name':"GA Ravishankar",
            'img':"/images/Speakers/image12.png",
            'place':"Dayananda Sagar College of Engineering, Bangalore",
            'topic':"Innovative plant biotechnological processes for the production of high-value metabolites"
        },{
            'name':"Guillermo Raul Castro",
            'img':"/images/Speakers/image13.png",
            'place':"National University of La Plata, Argentina",
            'topic':"Micro- and nano-biocarriers for molecular transport"
        },{
            'name':"Harvinder Singh Saini",
            'img':"/images/Speakers/image14.png",
            'place':"Guru Nanak Dev University, Amritsar",
            'topic':"Reduction of halogenated acetophenone derivatives by Pseudomonas sp (AP1): Comparing the efficiency of biological and chemical surfactants for improving yield of chiral synthons"
        },{
            'name':"In Seop Chang",
            'img':"/images/Speakers/image15.png",
            'place':"Gwangju Institute of Science and Technology",
            'topic':"Energy metabolism of carbon monoxide utilizingacetogens and biochemical productions"
        },{
            'name':"Jeyaprakash Rajendhran",
            'img':"/images/Speakers/image16.png",
            'place':"Madurai Kamaraj University, Madurai",
            'topic':"Genomic insights into the biofilm formation by Pseudomonas aeruginosa PAO1 "
        },{
            'name':"Jega Jegatheesan",
            'img':"/images/Speakers/image17.png",
            'place':"RMIT University, Australia",
            'topic':"Application of membrane bioreactor (MBR) for the treatment of persistent pollutants: Textile effluent - a case study"
        },{
            'name':"Jyoti Jadhav",
            'img':"/images/Speakers/image18.png",
            'place':"Shivaji University, Kolhapur",
            'topic':"Surface plasmon resonance for characterization of enzyme inhibitors"
        },{
            'name':"Jose Teixeira",
            'img':"/images/Speakers/image19.png",
            'place':"Universidade do Minho, Portugal",
            'topic':"Developments in the production of 2nd generation bioethanol"
        },{
            'name':"Jo-Shu Chang",
            'img':"/images/Speakers/image20.png",
            'place':"National Cheng Kung University, Taiwan",
            'topic':"Biorefinery concepts on CO2 reutilization via microalgae platform"
        },{
            'name':"K Pandima Devi",
            'img':"/images/Speakers/image21.png",
            'place':"Alagappa University, Karaikudi",
            'topic':"Multi-targeted neurotherapeutics against Alzheimer's disease: Evaluating the role of Grewia tiliaefolia and its active constituent in preventing Aβ induced proteotoxicity"
        },{
            'name':"Kanti Bhooshan Pandey",
            'img':"/images/Speakers/image22.png",
            'place':"CSIR-Central Salt & Marine Chemicals Research Institute, Bhavnagar",
            'topic':"Regulation of erythrocyte membrane transporters by resveratrol: Implications for human aging"
        },{
            'name':"Kavita Shah",
            'img':"/images/Speakers/image23.png",
            'place':"Banaras Hindu University, Varanasi",
            'topic':"Environmental biotechnology and innovations in era of changing climate"
        },{
            'name':"Kalpana Joshi",
            'img':"/images/Speakers/image24.png",
            'place':"Sinhgad College of Engineering, Vadgaon, Maharashtra",
            'topic':"Pharmacogenomic of RA"
        },{
            'name':"Li Shu",
            'img':"/images/Speakers/image25.png",
            'place':"Deakin University, Australia",
            'topic':"Comparison of aerobic and anaerobic degradation of textile dyes"
        },{
            'name':"Loulouda Bosnea",
            'img':"/images/Speakers/image26.png",
            'place':"University of Patras, Greece",
            'topic':"Microbial encapsulation for food production"
        },{
            'name':"Madhavan Nampoothiri",
            'img':"/images/Speakers/image27.png",
            'place':"CSIR-NIIST, Trivandrum",
            'topic':"Corynebacterium glutamicum  as a potent biocatalyst for the bioconversion of pentose sugars to value added products"
        },{
            'name':"Maria Kanellaki",
            'img':"/images/Speakers/image28.png",
            'place':"University of Patras, Greece",
            'topic':"New generation biofuel: Promotion of organic acids production from wastes"
        },{
            'name':"Munish Puri ",
            'img':"/images/Speakers/image29.png",
            'place':"Deakin University, Australia",
            'topic':"Lignocellulose biomass processing for producing high value algal bioactives"
        },{
            'name':"Monika Garg",
            'img':"/images/Speakers/image30.png",
            'place':"National Agri-Food Biotechnology Institute, Mohali",
            'topic':"Nutraceutical colored wheat "
        },{
            'name':"Monisha Dhiman",
            'img':"/images/Speakers/image31.png",
            'place':"Central University of Punjab, Bhatinda",
            'topic':"Role of mitochondia in doxorubicin induced cardio-toxicity"
        },{
            'name':"Neelam Sangwan",
            'img':"/images/Speakers/image32.png",
            'place':"CSIR-CentralInstitute of Medicinal & Aromatic Plants, Lucknow",
            'topic':"Biotechnological approaches for understanding withanolide biosynthesis and regulation in Withania somnifera"
        },{
            'name':"N Manickam",
            'img':"/images/Speakers/image33.png",
            'place':"CSIR-Indian Institute of Toxicology Research",
            'topic':"Comparative metagenomic, phylogenetic and functional analyses of microbial communities from the Ganges River Ecosystems"
        },{
            'name':"Nasreen Munshi",
            'img':"/images/Speakers/image34.png",
            'place':"Nirma University, Ahmedabad",
            'topic':"Hydrocarbon degradation by Pseudomonas citronellolis, the most abundant bacteria in common industrial effluent treatment plants"
        },{
            'name':"Pawan K. Dhar",
            'img':"/images/Speakers/image35.png",
            'place':"Jawaharlal Nehru University, New Delhi",
            'topic':"Synthetic Biology: concepts, challenges and opportunities"
        },{
            'name':"Patrick C. Hallenbeck",
            'img':"/images/Speakers/image36.png",
            'place':"University of Montreal, Canada",
            'topic':"Boosting microalgal lipid production through mixotrophy"
        },{
            'name':"P Binod",
            'img':"/images/Speakers/image37.png",
            'place':"CSIR-NIIST, Trivandrum",
            'topic':"Bio-based process for the production of industrially important platform chemicals"
        },{
            'name':"Prakasham Reddy Shetty",
            'img':"/images/Speakers/image38.png",
            'place':"CSIR-Indian Institute of Chemical Technology, Hyderabad",
            'topic':"Microbial glucans and their application potential in biomedical sector"
        },{
            'name':"PN Rangarajan",
            'img':"/images/Speakers/image39.png",
            'place':"Indian Institute of Science, Bangalore",
            'topic':"New insights into the regulation of metabolic pathways in the methylotrophic yeast, Pichia pastoris"
        },{
            'name':"Poonam Singh - Nee Nigam",
            'img':"/images/Speakers/image40.png",
            'place':"University of Ulster, UK",
            'topic':"Screening for dicarbonyl compounds in Manuka honey in terms of methylglyoxal equivalents"
        },{
            'name':"Pratyoosh Shukla ",
            'img':"/images/Speakers/image41.png",
            'place':"Maharshi Dayanand University",
            'topic':"Computational modeling, systems biology and novel platform design approaches for microbial enzymes"
        },{
            'name':"P. Mullai",
            'img':"/images/Speakers/image42.png",
            'place':"Annamalai University, Karaikudi, Tamil Nadu",
            'topic':"Residence time distribution studies in hybrid upflow anaerobic sludge blanket reactor treating textile wastewater"
        },{
            'name':"Papita Das",
            'img':"/images/Speakers/image43.png",
            'place':"Jadavpur University, Kolkata",
            'topic':"Application of fungi for nanoparticle synthesis and sequestration of heavy metals from wastewater"
        },{
            'name':"Rajanish Giri",
            'img':"/images/Speakers/image44.png",
            'place':"Indian Institute of Technology, Mandi",
            'topic':"Intrinsically disordered proteins: What we learnt from transition state structures?"
        },{
            'name':"Rajesh Rastogi",
            'img':"/images/Speakers/image45.png",
            'place':"Sardar Patel University, Gujarat",
            'topic':"Natural UV-sunscreens from cyanobacteria and their potential application as cosmeceuticals"
        },{
            'name':"Reeta Rani Singhania",
            'img':"/images/Speakers/image46.png",
            'place':"Indian Oil Corporation Limited, Faridabad",
            'topic':"Cellulase production: Challenges and future perspective for biorefinery"
        },{
            'name':"Ramaraj Boopathy",
            'img':"/images/Speakers/image47.png",
            'place':"Nicholls State University, USA",
            'topic':"Presence of antibiotic resistant bacteria and antibiotic resistance genes in the aquatic environment"
        },{
            'name':"Renu Wadhwa",
            'img':"/images/Speakers/image48.png",
            'place':"Advanced Institute of Science and Technology, Tsukuba, Japan",
            'topic':"Stress chaperone mortalin - Discovery to drug target"
        },{
            'name':"Roger Ruan",
            'img':"/images/Speakers/image49.png",
            'place':"University of Minnesota, USA",
            'topic':"Environment-enhancing biofuel and biobased byproduct production through innovative waste-to-algae technologies"
        },{
            'name':"R B Subramanian ",
            'img':"/images/Speakers/",
            'place':"Sardar Patel University, Gujarat",
            'topic':"Molecular Responses of Plants to Biotic and Abiotic Stress"
        },{
            'name':"Samir Kumar Khanal",
            'img':"/images/Speakers/image50.png",
            'place':"University of Hawai’i at Māna, Honolulu, USA",
            'topic':"Anaerobic digestion of high yield energy crops for bioenergy production"
        },{
            'name':"S. Renganathan",
            'img':"/images/Speakers/image51.png",
            'place':"Anna University, Chennai",
            'topic':"Biofuel production from marine macroalgae"
        },{
            'name':"Sunil Kaul",
            'img':"/images/Speakers/image52.png",
            'place':"Advanced Institute of Science and Technology, Tsukuba, Japan",
            'topic':"Active ingredients enriched ashwagandha leaves: Benefits, bioactives, biology and biotechnology"
        },{
            'name':"Sudipta De",
            'img':"/images/Speakers/image53.png",
            'place':"Jadvapur University, Kolkata",
            'topic':"Sustainable energy solution through efficient system integration and utilizing local resources: technological, economic and environmental feasibility assessment in Indian context"
        },{
            'name':"Sunil Kumar",
            'img':"/images/Speakers/image54.png",
            'place':"CSIR-National Environmental Engineering Research Institute, Nagpur",
            'topic':"Solid waste management and Biotechnology "
        },{
            'name':"Sudhir Singh",
            'img':"/images/Speakers/image55.png",
            'place':"Center of Innovative and Applied Bioprocessing, Mohali",
            'topic':"Transformation of fruit and vegetable residues in functional products"
        },{
            'name':"Sujata Upadhyaya",
            'img':"/images/Speakers/image56.png",
            'place':"Sikkim University, Sikkim",
            'topic':"Recent advances in micropropagation of temperate and subtropical fruit crops"
        },{
            'name':"Ulrika Rova",
            'img':"/images/Speakers/image57.png",
            'place':"Lulea University of Technology, Sweden",
            'topic':"Algae as production systems of bioactive compounds from forest biomass"
        },{
            'name':"Vinod Kumar",
            'img':"/images/Speakers/image58.png",
            'place':"Center of Innovative and Applied Bioprocessing, Mohali",
            'topic':"Microbial production of xylitol from agro waste residues: Current status and future perspectives"
        },{
            'name':"Vinod Kumar Garg",
            'img':"/images/Speakers/image59.png",
            'place':"Central University of Punjab, Bhatinda",
            'topic':"Potential of vermitechnology for nutrient recovery and organic waste recycling"
        },{
            'name':"Vitor Vasconcelos",
            'img':"/images/Speakers/image60.png",
            'place':"CIIMAR, Porto University, Portugal",
            'topic':"Cyanobacteria secondary metabolites with biotechnological applications: new approaches using ancient organisms"
        },{
            'name':"Wan Azlina Ahmad",
            'img':"/images/Speakers/image61.png",
            'place':"Universiti Teknologi Malaysia, Malaysia",
            'topic':"Production of bacterial pigments in low cost medium and formulation of biodegradable ink"
        },{
            'name':"Yusup Suzana",
            'img':"/images/Speakers/image62.png",
            'place':"Universiti Teknologi PETRONAS, Malayasia",
            'topic':"Relative yield efficieny of high free fatty acid rubber seed (Hevea brasiliensis) oil via hydrodynamic cavitation technology"
        },{
            'name':"You Kwan Oh",
            'img':"/images/Speakers/image63.png",
            'place':"Korea Institute of Energy Research, Seoul, South Korea",
            'topic':"Multifunctional nano/micro-particle engineering for microalgal biorefinery"
        },{
            'name':"Zainul Akmar Zakaria",
            'img':"/images/Speakers/image64.png",
            'place':"Universiti Teknologi Malaysia",
            'topic':"Growth improvement of banana and oil palm seedlings using locally isolated nitrogen fixing and phosphate solubilizing bacteria"
        }
























































    ];

};
app.controller(controllers);
