const db = require('../module/studentclass')
const db1 = require('../module/attendance')


const poststdcls = (req, resp) => {
    const { teacherid, classesid, subjectid, timeid } = req.body
    const studentid = req?.user?.id // Assuming the user ID is stored in req.user.id

    const sql = 'INSERT INTO studentclass (studentid,teacherid,classesid,subjectid,timeid) VALUES (?,?,?,?,?)';
    db.query(sql, [studentid, teacherid, classesid, subjectid, timeid], (err, result) => {
        if (err) resp.status(500).send({
            status: "500",
            message: err
        })
        resp.status(200).send('Record Inserted Successfully!')
    })

}

const postattend = async (req, resp) => {
    req.body.map(row => {
        const { att_date, userid, att_status, discription } = row
        const sql = 'INSERT INTO attendance (att_date, userid, att_status, discription) values (?,?,?,?)'
        db1.query(sql, [att_date, userid, att_status, discription], (err, result) => {
            if (err) {
                resp.status(500).send({
                    status: "500",
                    message: err
                })
            }
        })

    })
    resp.status(200).send('Record Inserted Successfully!')
}



const getstdcls = (req, resp) => {
    const id = req?.user?.id // Assuming the user ID is stored in req.user.id
    const mysql = 'select u.name as Teacher, c.classes as class_name, sub.sub_name as subject_name,t.time as time from studentclass s left join users u on s.teacherid=u.id left join classes c on s.classesid=c.id left join subject sub on s.subjectid=sub.id left join time t on s.timeid=t.id where s.studentid=?'
    db.query(mysql, [id], (err, result) => {
        if (err) resp.status(500).send({
            status: "500",
            message: err
        })
        resp.status(200).send({
            message: "Inserted Record!",
            data: result
        })
    })
}

const getTeacherAssignClass = (req, resp) => {
    const id = req?.user?.id // Assuming the user ID is stored in req.user.id
    const mysql = 'select u.name as Teacher, c.classes as class_name, c.id as classId from studentclass s left join users u on s.teacherid=u.id left join classes c on s.classesid=c.id  where s.teacherid=? group by c.id'
    db.query(mysql, [id], (err, result) => {
        if (err) resp.status(500).send({
            status: "500",
            message: err
        })
        resp.status(200).send({
            message: "Inserted Record!",
            data: result
        })
    })
}

const getTeachClassDetails = (req, resp) => {
    const id = req?.user?.id
    const { classId } = req.params// Assuming the user ID is stored in req.user.id
    const mysql = 'select u.name as StudentName, u.id as StudentId, c.classes as class_name, sub.sub_name as subject_name,t.time as time from studentclass s left join users u on s.studentid=u.id left join classes c on s.classesid=c.id left join subject sub on s.subjectid=sub.id left join time t on s.timeid=t.id where s.teacherid=? and s.classesid=?'
    db.query(mysql, [id, classId], (err, result) => {
        if (err) resp.status(500).send({
            status: "500",
            message: err
        })
        resp.status(200).send({
            message: "Inserted Record!",
            data: result
        })
    })
}

const getStudentExamDetails = (req, resp) => {
    const id = req?.user?.id
    const mysql = 'SELECT u.id as StudentId, c.id as ClassId, c.classes as ClassName , s.id as subjectId, s.sub_name as SubjectName , t.id as TimeId, t.time as ExamTime FROM studentclass sc  INNER JOIN users u on u.id = sc.studentid INNER JOIN exam e on e.classesid = sc.classesid INNER JOIN subject s on s.id = e.subjectid INNER JOIN time t on t.id = e.timeid INNER JOIN classes c on e.classesid =  c.id where u.id = ? '
    db.query(mysql, [id], (err, result) => {
        if (err) resp.status(500).send({
            status: "500",
            message: err
        })
        resp.status(200).send({
            message: "Inserted Record",
            data: result
        })
    })
}

const getTeacherResult = (req, resp) => {
    const mysql = `SELECT  u.id AS studentId, u.name AS studentName,  c.classes as className,  SUM(r.marks) AS totalMarks,  CASE  WHEN SUM(r.marks) > 150 AND MIN(r.marks) >= 30 THEN 'Pass'  ELSE 'Fail'  END AS result  FROM    (SELECT DISTINCT studentid FROM studentclass) sc INNER JOIN users u ON u.id = sc.studentid INNER JOIN studentresult r ON r.studentid = sc.studentid INNER JOIN classes c on c.id = r.classesid GROUP BY  u.id, u.name, c.classes ORDER BY  
    u.id LIMIT 0, 1000;`
    db.query(mysql, (err, result) => {
        if (err) resp.status(500).send({
            status: "500",
            message: err
        })
        resp.status(200).send({
            message: "Inserted Record",
            data: result
        })
    })


}

const studentInClass = (req, resp) => {
    const { classId } = req.params// Assuming the user ID is stored in req.user.id
    const mysql = 'SELECT u.name as studentName , u.id as studentId  FROM users u INNER JOIN (SELECT s.classesid, s.studentid FROM studentclass s GROUP BY s.classesid, s.studentid) as sid on sid.studentid = u.id INNER JOIN classes c on c.id = sid.classesid where c.id = ? '
    db.query(mysql, [classId], (err, result) => {
        if (err) resp.status(500).send({
            status: "500",
            message: err
        })
        resp.status(200).send({
            message: "Inserted Record!",
            data: result
        })
    })
}

const studentAttend = (req, resp) => {
    const { id } = req.params;
    const mysql = `
        SELECT 
            u.id,
            u.name, 
            c.classes, 
            a.att_status, 
            a.discription, 
            a.att_date 
        FROM attendance a 
        RIGHT JOIN (
            SELECT studentid, MAX(classesid) AS classesid 
            FROM studentclass 
            GROUP BY studentid
        ) as sc ON a.userid = sc.studentid 
      RIGHT JOIN users u ON u.id = sc.studentid 
        RIGHT JOIN classes c ON c.id = sc.classesid where u.type="student" and c.id=? order by u.name asc
    `;

    db1.query(mysql, [id], (err, result) => {
        if (err) {
            return resp.status(500).send({
                status: "500",
                message: err
            });
        }

        return resp.status(200).send({
            status: "200",
            message: "Fetched Record!",
            data: result
        });
    });
};



module.exports = {
    poststdcls,
    getstdcls,
    getTeacherAssignClass,
    getTeachClassDetails,
    getStudentExamDetails,
    getTeacherResult,
    studentInClass,
    postattend,
    studentAttend
}