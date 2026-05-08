import {redirect} from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
// or if the middleware doesn't run for some reason.
export default function RootPage() {
  redirect('/pt');
}
