gcloud container clusters create crk --zone=us-west1-a
sleep 2
kubectl apply -f pod.yaml
kubectl expose pods college-review-pod1 --port=80 --type=LoadBalancer
kubectl get services
