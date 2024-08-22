export const Skill = (props) => {
  const { icon, name } = props;
  return (
    <div>
      {icon}
      <p className="">{name}</p>
    </div>
  );
};
