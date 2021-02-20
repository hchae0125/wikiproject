import mysql from 'mysql';

export class dbConnect {
    public static connect() : void {
        const connection = mysql.createConnection({
            host:'wikiprojectdb.cju7fv11u0ey.us-east-2.rds.amazonaws.com',
            user:'admin',
            password:'Gksmf0410!',
            port: 3306
        });
        
        connection.connect(function(err) {
            if (err){
                console.error('Database connection failed' + err.stack);
                return;
            }
            console.log('connected to database');
        })
    }
    
}

