function skillsMember() {
  const skillsMember = document.querySelector('.js-skills-member');
  const skillsMemberContent = document.querySelector('.js-skills-member-content');
  const skillsMemberContentHeight = skillsMemberContent.clientHeight;
  const skillsMemberContentWidth = skillsMemberContent.clientWidth;

  if (skillsMemberContentHeight > 0 && skillsMemberContentWidth > 0) {
    skillsMemberContent.style.height = skillsMemberContentHeight + 'px';
    skillsMemberContent.style.width = skillsMemberContentWidth + 'px';
  }
}