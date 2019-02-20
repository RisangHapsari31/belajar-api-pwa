$(document).ready(function (){

    //inisialisasi API
    var _url = 'http://my-json-server.typicode.com/Risanghapsari31/belajar-api/mahasiswa';

    //untuk menampung data semua mahasiswa
    var result = '';

    //untuk menampung gender sebagai option yang di select 
    var gender_result = '';

    //untuk menampung gender semua mahasiswa
    var gender = [];

   
        $.get(_url,function(data){
            $.each(data, function (key, items){
                _gend = items.gender;

                result+= '<div><h3>'+items.first_name+'<h3><p>'+_gend+'</p></div>';

                if ($.inArray(_gend, gender) === -1){
                    gender.push(_gend);
                    gender_result += "<option value'"+_gend+"'>"+_gend+"</option>";
                }
            });

            $('#mhs-list').html(result);
            $('#mhs-select').html(gender_result);
        });
});
