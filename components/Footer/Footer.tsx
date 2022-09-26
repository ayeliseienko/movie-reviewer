export default function Footer(): JSX.Element {
  return (
    <footer className='flex justify-center items-center gap-5 text-slate-500'>
      <a
        href='https://github.com/ayeliseienko/movie-reviewer'
        target='blank'
        className='hover:text-slate-300 hover:underline'
      >
        Github
      </a>
      <p>Project was created for educational purposes</p>
    </footer>
  );
}
