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
            "fee1" : 4500,
            "fee2": 5000
        },
        {
            "cat" : "Full Deledates (Non BRSI Members)	",
            "fee1" : 5250,
            "fee2": 5750
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
        "fee1" : 115	,
        "fee2": 140
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
                "institute":"Karaikudi"
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
        "name":"VIT Working Committee",
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
app.controller(controllers);
