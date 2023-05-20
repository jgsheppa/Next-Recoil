// Credit to @spro who created this gist:
// https://gist.github.com/spro/a4ccb681ba05abde9943fdfcd9bf497d
// This example builds off of @spro's gist by
// adding types and multiple `RecoilRoot` components.
import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { yearAtom } from '../../recoil/atoms';
import UserInfo from '../../components/User';
import UserDescription from '../../components/UserDescription';
import { initializeRecoilState, ssrAtomKeys, ssrAtoms } from '../../recoil/ssr';
import { SSRAtomValues, SSRAtoms, User } from '../../recoil/types';

type HomeProps = {
  initialRecoilState: Record<string, SSRAtomValues>;
}

export default function Home({ initialRecoilState = {} }: HomeProps) {
  const year = useRecoilValue(yearAtom)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Year: {year} (outside of RecoilRoot used for SSR)</p>
      <RecoilRoot initializeState={initializeRecoilState<SSRAtomValues>(initialRecoilState, ssrAtomKeys)} >
        <UserInfo />
        <UserDescription />
      </RecoilRoot>
    </main>
  )
}

export async function getServerSideProps() {
  // This data would normally come from an API call.
  // For this example, the data will be hard-coded.
  const userAtom: User = {
    name: 'Mace',
    age: 45
  }

  const occupationAtom = 'Jedi'

  // Place the data inside of an initial Recoil
  // state object.
  const initialRecoilState: Record<string, SSRAtomValues> = {
    userAtom, occupationAtom
  }

  // Pass initial state via props.
  return { props: { initialRecoilState } };
}