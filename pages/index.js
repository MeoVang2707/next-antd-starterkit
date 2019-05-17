import Link from 'next/link';
import { Button } from 'antd';
import 'app.less'

const Index = () => {
  return (
    <div>
      <p>Hello Next.js</p>
      <Link href='/about'>
        <Button>About</Button>
      </Link>
    </div>
  );
};

export default Index;
