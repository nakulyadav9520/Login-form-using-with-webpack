import _ from 'lodash';
import './style.css';


function login_form() {
  var heading = document.createElement('h1');
  heading.innerText = ('Login Form');
  heading.classList.add('tagline');

  var mainsec = document.createElement('div');
  mainsec.classList.add('login_section');

  var containdiv = document.createElement('div');
  containdiv.classList.add('container');

  var form = document.createElement('form');
  form.setAttribute('method', 'POST');
  form.setAttribute('id', 'form_block');
  form.classList.add('form_box');

  var indiv_1 = document.createElement('div');
  indiv_1.classList.add('filedset');

  var indiv_2 = document.createElement('div');
  indiv_2.classList.add('filedset');

  var indiv_3 = document.createElement('div');
  indiv_3.classList.add('filedset');

  var email = document.createElement('input');
  email.setAttribute('type', 'email');
  email.setAttribute('name', 'email_address');
  email.setAttribute('value', '');
  email.setAttribute('placeholder', 'User name or Email');

  var password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.setAttribute('name', 'password');
  password.setAttribute('value', '');
  password.setAttribute('placeholder', 'Password');

  var subbtn = document.createElement('button');
  subbtn.setAttribute('type', 'submit');
  subbtn.innerHTML = ("Login");
  subbtn.classList.add('login_button');

  mainsec.appendChild(containdiv);
  containdiv.appendChild(form);
  form.appendChild(heading);
  form.appendChild(indiv_1);
  indiv_1.appendChild(email);
  form.appendChild(indiv_2);
  indiv_2.appendChild(password);
  form.appendChild(indiv_3);
  indiv_3.appendChild(subbtn);
  return mainsec;
}
document.body.appendChild(login_form());

