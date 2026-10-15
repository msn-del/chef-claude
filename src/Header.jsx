import icon from './photos/chef.png';
export default function Header() {
  return (
    <header>
      <img src={icon} alt="Chef Claude" />
      <h1>Chef Claude</h1>
    </header>
  );
}