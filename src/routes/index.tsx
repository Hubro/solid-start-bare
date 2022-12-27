import { Title, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import Counter from '~/components/Counter';
import doSomethingWithK8s from '~/k8s';

export function routeData() {
  const k8sStatus = createServerData$(async () => {
    return doSomethingWithK8s();
  });

  return {
    k8sStatus,
  };
}

export default function Home() {
  const { k8sStatus } = useRouteData<typeof routeData>();

  return (
    <main>
      <Title>Hello World</Title>

      <h1>Hello, Kubernetes!</h1>

      <p>
        Data from k8s: <strong>{k8sStatus()}</strong>
      </p>
    </main>
  );
}
