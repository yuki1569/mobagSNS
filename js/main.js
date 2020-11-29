'use script'
{

  $(".my-profile").on('click', function () {
    $("#profile").slideToggle();
  });
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
    "img/face4.png",
    "img/face5.png",
    "img/face6.png",
  ];
  const thum_face_img = [
    "img/thum/thum_face0.png",
    "img/thum/thum_face1.png",
    "img/thum/thum_face2.png",
    "img/thum/thum_face3.png",
    "img/thum/thum_face4.png",
    "img/thum/thum_face5.png",
    "img/thum/thum_face6.png",
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
    "img/tops4.png",
    "img/tops5.png",
    "img/tops6.png",
    "img/tops7.png",
    "img/tops8.png",
    "img/tops9.png",
    "img/tops10.png",
  ];
  const thum_tops_img = [
    "img/thum/thum_tops0.png",
    "img/thum/thum_tops1.png",
    "img/thum/thum_tops2.png",
    "img/thum/thum_tops3.png",
    "img/thum/thum_tops4.png",
    "img/thum/thum_tops5.png",
    "img/thum/thum_tops6.png",
    "img/thum/thum_tops7.png",
    "img/thum/thum_tops8.png",
    "img/thum/thum_tops9.png",
    "img/thum/thum_tops10.png",
  ];
  const bottoms_img = [
    "img/bottoms0.png",
    "img/bottoms1.png",
    "img/bottoms2.png",
    "img/bottoms3.png",
    "img/bottoms4.png",
    "img/bottoms5.png",
    "img/bottoms6.png",
    "img/bottoms7.png",
    "img/bottoms8.png",
  ];
  const thum_bottoms_img = [
    "img/thum/thum_bottoms0.png",
    "img/thum/thum_bottoms1.png",
    "img/thum/thum_bottoms2.png",
    "img/thum/thum_bottoms3.png",
    "img/thum/thum_bottoms4.png",
    "img/thum/thum_bottoms5.png",
    "img/thum/thum_bottoms6.png",
    "img/thum/thum_bottoms7.png",
    "img/thum/thum_bottoms8.png",
  ];
  const shoes_img = [
    "img/shoes0.png",
    "img/shoes1.png",
    "img/shoes2.png",
    "img/shoes3.png",
    "img/shoes4.png",
    "img/shoes5.png",
    "img/shoes6.png",
    "img/shoes7.png",
    "img/shoes8.png",
  ];
  const thum_shoes_img = [
    "img/thum/thum_shoes0.png",
    "img/thum/thum_shoes1.png",
    "img/thum/thum_shoes2.png",
    "img/thum/thum_shoes3.png",
  ];



  for (let i = 0; i < thum_face_img.length ; i++) {
    $("#thum-face ul").append(`
      <li><img src="${thum_face_img[i]}"></li>
      `)
    $(`#thum-face li:nth-child(${i +1})`).on('click', function () {
      $(".face").attr('src', `${face_img[i]}`);
      const data = {
        face: `${ face_img[i]}`, // inputの入力値
      };
      firebase.firestore().collection(`user`).doc(`${nowuid}`).set(data, {merge: true});

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
      };
      firebase.firestore().collection(`user`).doc(`${nowuid}`).set(data, { merge: true });
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
      firebase.firestore().collection(`user`).doc(`${nowuid}`).set(data, { merge: true });
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
      firebase.firestore().collection(`user`).doc(`${nowuid}`).set(data, { merge: true });
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
      firebase.firestore().collection(`user`).doc(`${nowuid}`).set(data, { merge: true });
    });
  }



}