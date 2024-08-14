# @api_view(['POST'])
# @permission_classes([permissions.IsAuthenticated])
# def submit_product(request):
#     user = request.user
    
#     # Fetch or create UserController
#     user_controller, created = UserController.objects.get_or_create(user=user)
    
#     # Check if user has reached the 40 clicks limit
#     if user_controller.submissions_made >= user_controller.submission_limit:
#         logger.info("User has reached the maximum number of clicks.")
#         user_controller.click_count = 0
#         user_controller.save()
#         return Response({"detail": "You have reached the maximum number of clicks."}, status=status.HTTP_400_BAD_REQUEST)

#     try:
#         # Fetch products based on user's VIP level instead of user-specific products
#         products = Product.objects.filter(vip_level=user.vip_level, is_submitted=False)
#         if not products.exists():
#             logger.info("No products available")
#             return Response({"detail": "No products available"}, status=status.HTTP_404_NOT_FOUND)

#         product = random.choice(products)

#         timer_status = user_controller.check_timer_status()
#         if timer_status == "expired":
#             logger.info("Timer expired for user.")
#             return Response({"detail": "Timer expired, kindly fund your account to continue."}, status=status.HTTP_400_BAD_REQUEST)

#         # Calculate profit
#         product.calculate_profit()
#         product.is_submitted = True

#         # Update balance and save product
#         new_balance = user.balance + product.profit
#         if new_balance < 0:
#             product.is_pending = True
#             product.save()
#             notify_user(user, "Insufficient balance. Please recharge your account.")
#             return Response({"detail": "Insufficient balance. Please recharge your account."}, status=status.HTTP_400_BAD_REQUEST)

#         with transaction.atomic():
#             user.update_balance(product.profit)
#             user.save()
#             product.save()

#             # Log user submission in UserController
             user_controller.timestamp = timezone.now()
             user_controller.submissions_made += 1
             user_controller.add_submission_timestamp()
             user_controller.save()

         # Calculate daily profit
         today = timezone.now().date()
         daily_profit = UserController.objects.filter(user=user, timestamp__date=today).aggregate(daily_profit=Sum('user_recharge'))['daily_profit'] or 0

         data = {
             'product': ProductSerializer(product).data,
             'new_balance': user.balance,
             'profit_or_loss': product.profit,
             'daily_profit': daily_profit
         }
         return Response(data, status=status.HTTP_200_OK)
     except Exception as e:
         logger.error(f"Error in submit_product: {e}")
         return Response({"detail": "An error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

     user = request.user
    
     # Fetch or create UserController
     user_controller, created = UserController.objects.get_or_create(user=user)
    
     # Check if user has reached the 40 clicks limit
     if len(user_controller.submission_timestamps) >= 40:
         logger.info("User has reached the maximum number of submission.")
         user_controller.can_submit =

     # if user_controller.submissions_made >= user_controller.submission_limit:
     #     logger.info("User has reached the maximum number of clicks.")
     #     user_controller.click_count = 0
     #     user_controller.save()
     #     return Response({"detail": "You have reached the maximum number of clicks."}, status=status.HTTP_400_BAD_REQUEST)

     try:
         products = Product.objects.filter(user=user, is_submitted=False)
         if not products.exists():
             logger.info("No products available")
             return Response({"detail": "No products available"}, status=status.HTTP_404_NOT_FOUND)

         product = random.choice(products)

         timer_status = user_controller.check_timer_status()
         if timer_status == "expired":
             logger.info("Timer expired for user.")
             return Response({"detail": "Timer expired, kindly fund your account to continue."}, status=status.HTTP_400_BAD_REQUEST)

         # Calculate profit
         product.calculate_profit()
         product.is_submitted = True


         # Update balance and save product
         new_balance = user.balance + product.profit
         if new_balance < 0:
             product.is_pending = True
             product.save()
             notify_user(user, "Insufficient balance. Please recharge your account.")
             return Response({"detail": "Insufficient balance. Please recharge your account."}, status=status.HTTP_400_BAD_REQUEST)

         with transaction.atomic():
             user.update_balance(product.profit)
             user.save()
             product.save()

             # Log user submission in UserController
             user_controller.timestamp = timezone.now()
             user_controller.submissions_made += 1
             user_controller.add_submission_timestamp()
             user_controller.save()

         # Calculate daily profit
         today = timezone.now().date()
         daily_profit = UserController.objects.filter(user=user, timestamp__date=today).aggregate(daily_profit=Sum('user_recharge'))['daily_profit'] or 0

         data = {
             'product': ProductSerializer(product).data,
             'new_balance': user.balance,
             'profit_or_loss': product.profit,
             'daily_profit': daily_profit
         }
         return Response(data, status=status.HTTP_200_OK)
     except Exception as e:
         logger.error(f"Error in submit_product: {e}")
         return Response({"detail": "An error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
