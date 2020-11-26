'use script'
{



  $(".tweet").on('click', function () {
    $("#tweet-container").slideToggle();
  });
  $(".change").on('click', function () {
    $("#acMenu").slideToggle();
  });
  
  $("#acMenu dt").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });
  
  const face_img = [
    "img/face0.png",
    "img/face1.png",
    "img/face2.png",
    "img/face3.png",
  ];
  const thum_face_img = [
    "img/thum/thum_face0.png",
    "img/thum/thum_face1.png",
    "img/thum/thum_face2.png",
    "img/thum/thum_face3.png",
  ];
  const head_img = [
    "img/head0.png",
    "img/head1.png",
    "img/head2.png",
    "img/head3.png",
  ];
  const thum_head_img = [
    "img/thum/thum_head0.png",
    "img/thum/thum_head1.png",
    "img/thum/thum_head2.png",
    "img/thum/thum_head3.png",
  ];
  const tops_img = [
    "img/tops0.png",
    "img/tops1.png",
    "img/tops2.png",
    "img/tops3.png",
  ];
  const thum_tops_img = [
    "img/thum/thum_tops0.png",
    "img/thum/thum_tops1.png",
    "img/thum/thum_tops2.png",
    "img/thum/thum_tops3.png",
  ];
  const bottoms_img = [
    "img/bottoms0.png",
    "img/bottoms1.png",
    "img/bottoms2.png",
    "img/bottoms3.png",
  ];
  const thum_bottoms_img = [
    "img/thum/thum_bottoms0.png",
    "img/thum/thum_bottoms1.png",
    "img/thum/thum_bottoms2.png",
    "img/thum/thum_bottoms3.png",
  ];
  const shoes_img = [
    "img/shoes0.png",
    "img/shoes1.png",
    "img/shoes2.png",
    "img/shoes3.png",
  ];
  const thum_shoes_img = [
    "img/thum/thum_shoes0.png",
    "img/thum/thum_shoes1.png",
    "img/thum/thum_shoes2.png",
    "img/thum/thum_shoes3.png",
  ];

  const img_type = ["face", "head", "tops", "bottomns", "shoes"];

  // img_type.forEach(type => {
  //     for (let i = 0; i < thum_face_img.length ; i++) {
  //   $("#thum-face ul").append(`
  //     <li><img src="${thum_face_img[i]}"></li>
  //     `)
  //   $(`#thum-face li:nth-child(${i +1})`).on('click', function () {
  //     $(".face").attr('src', `${face_img[i]}`);
  //   });
  // }
  // });

  for (let i = 0; i < thum_face_img.length ; i++) {
    $("#thum-face ul").append(`
      <li><img src="${thum_face_img[i]}"></li>
      `)
    $(`#thum-face li:nth-child(${i +1})`).on('click', function () {
      $(".face").attr('src', `${face_img[i]}`);
      const data = {
        face: `${ face_img[i]}`, // inputの入力値
        time: firebase.firestore.FieldValue.serverTimestamp(), // 登録日時
      };
      firebase.firestore().collection(`user`).doc(`${uid}`).set(data, {merge: true});

    });
  }
  for (let i = 0; i < thum_head_img.length ; i++) {
    $("#thum-head ul").append(`
      <li><img src="${thum_head_img[i]}"></li>
      `)
    $(`#thum-head li:nth-child(${i +1})`).on('click', function () {
      $(".head").attr('src', `${head_img[i]}`);
      const data = {
        head: `${head_img[i]}`, // inputの入力値
        time: firebase.firestore.FieldValue.serverTimestamp(), // 登録日時
      };
      firebase.firestore().collection(`user`).doc(`${uid}`).set(data, { merge: true });
    });
  }
  for (let i = 0; i < thum_tops_img.length ; i++) {
    $("#thum-tops ul").append(`
      <li><img src="${thum_tops_img[i]}"></li>
      `)
    $(`#thum-tops li:nth-child(${i +1})`).on('click', function () {
      $(".tops").attr('src', `${tops_img[i]}`);
      const data = {
        tops: `${tops_img[i]}`, // inputの入力値
      };
      firebase.firestore().collection(`user`).doc(`${uid}`).set(data, { merge: true });
    });
  }
  for (let i = 0; i < thum_bottoms_img.length ; i++) {
    $("#thum-bottoms ul").append(`
      <li><img src="${thum_bottoms_img[i]}"></li>
      `)
    $(`#thum-bottoms li:nth-child(${i +1})`).on('click', function () {
      $(".bottoms").attr('src', `${bottoms_img[i]}`);
      const data = {
        bottoms: `${bottoms_img[i]}`, // inputの入力値
      };
      firebase.firestore().collection(`user`).doc(`${uid}`).set(data, { merge: true });
    });
  }
  for (let i = 0; i < thum_shoes_img.length ; i++) {
    $("#thum-shoes ul").append(`
      <li><img src="${thum_shoes_img[i]}"></li>
      `)
    $(`#thum-shoes li:nth-child(${i +1})`).on('click', function () {
      $(".shoes").attr('src', `${shoes_img[i]}`);
      const data = {
        shoes: `${shoes_img[i]}`, // inputの入力値
      };
      firebase.firestore().collection(`user`).doc(`${uid}`).set(data, { merge: true });
    });
  }


  console.log(`${db}`);

}