gcloud container clusters create crk --zone=us-west1-a
sleep 2
kubectl apply -f pod.yaml
sleep 8
kubectl get services