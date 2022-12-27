import { KubeConfig } from '@kubernetes/client-node';

// This function pretends to do something with k8s
export default function doSomethingWithK8s() {
  const cfg = new KubeConfig();

  return 'I did something with k8s';
}
