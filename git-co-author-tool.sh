#!/bin/bash
# A Bash script to configure the co-author tool and create git commits using co-author.

while true; do
  echo MAIN MENU
  echo ==============================
  echo Please select an option below:
  echo 1. Set co-author config
  echo 2. Create git commit
  echo 3. Push to master
  echo ""
  echo Use ctrl-c to quit

  read input

  # Option 1 - Set co-author config
  if [ $input == 1 ]
  then
    # Get user1 data
    echo Enter the first co-author full name.
    echo example: Kevin Durant
    read user1FullName

    echo Enter the first co-author email.
    echo example: kevindurant@basketballguy.com
    read user1Email

    # Get user2 data
    echo Enter the second co-author full name.
    echo example: Kobe Bryant
    read user2FullName

    echo Enter the second co-author email.
    echo example: kobebryant@basketballguy.com
    read user2Email

    echo Co-author settings saved!
  fi

  # Option 2 - Create git commit
  if [ $input == 2 ]
  then
    # Prompt for commit message
    echo Please enter a commit message:
    read msg

    git commit -m "$(echo -e "$msg\n\nCo-authored-by: $user1FullName <$user1Email>\nCo-authored-by: $user2FullName <$user2Email>")"
    #echo -ne '\n'
    #echo -ne '\n'
    #Co-authored-by: $user1FullName <$user1Email>
    #Co-authored-by: $user2FullName <$user2Email>"
  fi

  # Option 3 - Push to master
  if [ $input == 3 ]
  then
    # Push to master
    git push origin master
  fi
done
