var sequelize = require('sequelize');
var db 		  = new sequelize('db_test_api','root','root',{
	host:'localhost',
	dialect:'mysql',
	operatorsAliases: false
});


var Mahasiswa = db.define('mahasiswa',{
	nim :{
		type : sequelize.STRING,
		allowNull : false,
		validate :{
			notEmpty : true,
			len :{
                 args: [6, 128],
                 msg: "Panjang Karakter Minimal 6 sampai 128"
            },
            isNumeric :{
            	msg : 'Nim Yang Anda Masukkan Hurus Format 0-9'
            }
		}
	},
	nama :{
		type : sequelize.TEXT,
		allowNull : false,
		validate :{
			notEmpty : true,
			len :{
                 args: [6, 128],
                 msg: "Panjang Karakter Minimal 6 sampai 128"
            },
		}
	},
	email :{
		type : sequelize.STRING,
		allowNull : false,
		validate :{
			notEmpty : true,
			len :{
                 args: [6, 128],
                 msg: "Panjang Karakter Minimal 6 sampai 128"
            },
            isEmail: {
                msg: "Email yang anda masukkan tidak valid"
            }
		}
	},
	no_hp :{
		type : sequelize.TEXT,
		allowNull : false,
		validate :{
			isNumeric : true,
		}
	}
});

module.exports = {
	Mahasiswa 	: Mahasiswa,
	db 			: db
}

